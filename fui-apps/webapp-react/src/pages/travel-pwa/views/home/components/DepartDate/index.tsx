import * as React from 'react'
import { h0 } from '../../../../utils/fp';
import * as dayjs from 'dayjs';

import './index.styl'

const { useMemo } = React
interface IProps {
  onClick: (e: any) => void
  time: number
}
function DepertDate(props: IProps) {
  const { time, onClick } = props;

  const h0OfDepart = h0(time);
  const departDate = new Date(h0OfDepart);

  const departDateString = useMemo(() => {
    return dayjs(h0OfDepart).format('YYYY-MM-DD');
  }, [h0OfDepart]);
  const isToday = h0OfDepart === h0();

  const weekString =
        '周' +
        ['日', '一', '二', '三', '四', '五', '六'][departDate.getDay()] +
        (isToday ? '(今天)' : '');
  return (
    <div className="depart-date" onClick={onClick}>
    <input type="hidden" name="date" value={departDateString} />
    {departDateString} <span className="depart-week">{weekString}</span>
</div>
  )
}

export default DepertDate
