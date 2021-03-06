import * as React from 'react';
import classnames from 'classnames';

import { h0 } from '../../../../utils/fp';
import Header from '../../../../components/header';

import './index.styl';

/* tslint:disable */
interface IDayProps {
  day: number
  onSelect: (d: any) => void
};
function Day(props: IDayProps) {
    const { day, onSelect } = props;

    if (!day) {
        return <td className="null" />;
    }

    const classes: any[] = [];

    const now = h0();

    if (day < now) {
        classes.push('disabled');
    }
    const sixZero: any = [6, 0]
    if (sixZero.includes(new Date(day).getDay())) {
        classes.push('weekend');
    }

    const dateString = now === day ? '今天' : new Date(day).getDate();

    return (
        <td className={classnames(classes)} onClick={() => onSelect(day)}>
            {dateString}
        </td>
    );
}

interface IWeekProps {
  days: any[]
  onSelect: () => void
};
function Week(props: IWeekProps) {
    const { days, onSelect } = props;

    return (
        <tr className="date-table-days">
            {days.map((day, idx) => {
                return <Day key={idx} day={day} onSelect={onSelect} />;
            })}
        </tr>
    );
}


interface IMonthProps {
  startingTimeInMonth: number
  onSelect: () => void
};
function Month(props: IMonthProps) {
    const { startingTimeInMonth, onSelect } = props;

    const startDay = new Date(startingTimeInMonth);
    const currentDay = new Date(startingTimeInMonth);

    let days: any[] = [];

    while (currentDay.getMonth() === startDay.getMonth()) {
        const day: any = currentDay.getTime()
        days.push(day);
        currentDay.setDate(currentDay.getDate() + 1);
    }

    days = new Array(startDay.getDay() ? startDay.getDay() - 1 : 6)
        .fill(null)
        .concat(days);

    const lastDay = new Date(days[days.length - 1]);

    days = days.concat(
        new Array(lastDay.getDay() ? 7 - lastDay.getDay() : 0).fill(null)
    );

    const weeks: any[] = [];

    for (let row = 0; row < days.length / 7; ++row) {
        const week: any[] = days.slice(row * 7, (row + 1) * 7);
        weeks.push(week);
    }

    return (
        <table className="date-table">
            <thead>
                <tr>
                    <td colSpan={7}>
                        <h5>
                            {startDay.getFullYear()}年{startDay.getMonth() + 1}
                            月
                        </h5>
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr className="data-table-weeks">
                    <th>周一</th>
                    <th>周二</th>
                    <th>周三</th>
                    <th>周四</th>
                    <th>周五</th>
                    <th className="weekend">周六</th>
                    <th className="weekend">周日</th>
                </tr>
                {weeks.map((week, idx) => {
                    return <Week key={idx} days={week} onSelect={onSelect} />;
                })}
            </tbody>
        </table>
    );
}

interface IDateSelectorProps {
  show: boolean
  onSelect: () => void
  onBack: () => void
};

export default function DateSelector(props: IDateSelectorProps) {
    const { show, onSelect, onBack } = props;

    const now = new Date();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);
    now.setDate(1);

    const monthSequence = [now.getTime()];

    now.setMonth(now.getMonth() + 1);
    monthSequence.push(now.getTime());

    now.setMonth(now.getMonth() + 1);
    monthSequence.push(now.getTime());

    return (
        <div className={classnames('date-selector', { hidden: !show })}>
            <Header title="日期选择" onBack={onBack} />
            <div className="date-selector-tables">
                {monthSequence.map(month => {
                    return (
                        <Month
                            key={month}
                            onSelect={onSelect}
                            startingTimeInMonth={month}
                        />
                    );
                })}
            </div>
        </div>
    );
}


