import * as React from 'react';
import classnames from 'classnames';
import './index.styl';

const { useState, useCallback, useEffect, useMemo, memo } = React

interface ICityItemProps {
  name: string
  onSelect: (n: string) => void
};
const CityItem = memo((props: ICityItemProps) => {
    const { name, onSelect } = props;
    return (
        <li className="city-li" onClick={() => onSelect(name)}>
            {name}
        </li>
    );
});


interface ICitySectionProps {
  title: string
  cities: string[]
  onSelect: () => void
};
const CitySection = memo((props: ICitySectionProps) => {
    const { title, cities = [], onSelect } = props;

    return (
        <ul className="city-ul">
            <li className="city-li" key="title" data-cate={title}>
                {title}
            </li>
            {cities.map((city: any) => {
                return (
                    <CityItem
                        key={city.name}
                        name={city.name}
                        onSelect={onSelect}
                    />
                );
            })}
        </ul>
    );
});


interface IAlphaIndexProps {
  alpha: string,
  onClick: (a: string) => void,
};
const AlphaIndex = memo((props: IAlphaIndexProps) => {
    const { alpha, onClick } = props;
    return (
        <i className="city-index-item" onClick={() => onClick(alpha)}>
            {alpha}
        </i>
    );
});



const alphabet = Array.from(new Array(26), (ele, index) => {
    return String.fromCharCode(65 + index);
});

interface ISection {
  title: string
  citys: string[]
}
interface ICityListProps {
  sections: ISection[]
  onSelect: () => void
  toAlpha: (a: any) => void
};
const CityList = memo((props: ICityListProps) => {
    const { sections, toAlpha, onSelect } = props;

    return (
        <div className="city-list">
            <div className="city-cate">
                {sections.map(section => {
                    return (
                        <CitySection
                            key={section.title}
                            title={section.title}
                            cities={section.citys}
                            onSelect={onSelect}
                        />
                    );
                })}
            </div>
            <div className="city-index">
                {alphabet.length && alphabet.map(alpha => {
                    return (
                        <AlphaIndex
                            key={alpha}
                            alpha={alpha}
                            onClick={toAlpha}
                        />
                    );
                })}
            </div>
        </div>
    );
});


interface ISuggestItemProps {
  name: string
  onClick: (n: string) => void
};

const SuggestItem = memo((props: ISuggestItemProps) => {
    const { name, onClick } = props;

    return (
        <li className="city-suggest-li" onClick={() => onClick(name)}>
            {name}
        </li>
    );
});

interface ISuggestProp {
  searchKey: string
  onSelect: (k: any) => void
};
const Suggest = memo((props: ISuggestProp) => {
    const { searchKey, onSelect } = props;

    const [result, setResult] = useState([]);

    useEffect(() => {
        fetch('/rest/search?key=' + encodeURIComponent(searchKey))
            .then(res => res.json())
            .then(res => {
                const { data, searchKey: sKey } = res;

                if (sKey === searchKey) {
                    setResult(data);
                }
            });
    }, [searchKey]);

    const fallBackResult = useMemo(() => {
        if (!result.length) {
            return [
                {
                    display: searchKey,
                },
            ];
        }

        return result;
    }, [result, searchKey]);

    return (
        <div className="city-suggest">
            <ul className="city-suggest-ul">
                {fallBackResult.map(item => {
                    return (
                        <SuggestItem
                            key={item.display}
                            name={item.display}
                            onClick={onSelect}
                        />
                    );
                })}
            </ul>
        </div>
    );
});


interface ICityData {
  cityList: any[]
}
interface ICitySelectorProps {
  show: boolean
  cityData: ICityData
  isLoading: boolean
  onBack: () => void
  fetchCityData: () => void
  onSelect: (k?: any) => void
};
const CitySelector = memo((props: ICitySelectorProps) => {
    const {
        show,
        cityData,
        isLoading,
        onBack,
        fetchCityData,
        onSelect,
    } = props;

    const [searchKey, setSearchKey] = useState('');

    const key = useMemo(() => searchKey.trim(), [searchKey]);

    useEffect(() => {
        if (!show || cityData || isLoading) {
            return;
        }

        fetchCityData();
    }, [show, cityData, isLoading]); // show, cityData, isLoading变化需要重新获取cityData

    // type: (alpha: any) => viod
    const toAlpha = useCallback(alpha => {
        const dataCateAlpha = document.querySelector(`[data-cate='${alpha}']`)
        if (dataCateAlpha) {
          dataCateAlpha.scrollIntoView();
        }
    }, []);

    const outputCitySections = () => {
        if (isLoading) {
            return <div>loading</div>;
        }

        if (cityData) {
            return (
                <CityList
                    sections={cityData.cityList}
                    onSelect={onSelect}
                    toAlpha={toAlpha}
                />
            );
        }

        return <div>error</div>;
    };

    return (
        <div className={classnames('city-selector', { hidden: !show })}>
            <div className="city-search">
                <div className="search-back" onClick={() => onBack()}>
                    <svg width="42" height="42">
                        <polyline
                            points="25,13 16,21 25,29"
                            stroke="#fff"
                            strokeWidth="2"
                            fill="none"
                        />
                    </svg>
                </div>
                <div className="search-input-wrapper">
                    <input
                        type="text"
                        value={searchKey}
                        className="search-input"
                        placeholder="城市、车站的中文或拼音"
                        onChange={e => setSearchKey(e.target.value)}
                    />
                </div>
                <i
                    onClick={() => setSearchKey('')}
                    className={classnames('search-clean', {
                        hidden: key.length === 0,
                    })}
                >
                    &#xf063;
                </i>
            </div>
            {Boolean(key) && (
                <Suggest searchKey={key} onSelect={(k: any) => onSelect(k)} />
            )}
            {outputCitySections()}
        </div>
    );
});



export default CitySelector;
