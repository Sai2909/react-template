import subDays from 'date-fns/subDays';
import startOfWeek from 'date-fns/startOfWeek';
import endOfWeek from 'date-fns/endOfWeek';
import addDays from 'date-fns/addDays';
import startOfMonth from 'date-fns/startOfMonth';
import endOfMonth from 'date-fns/endOfMonth';
import addMonths from 'date-fns/addMonths';


export const predefinedRanges = [
    {
      label: 'Today',
      value: [new Date(), new Date()],
      placement: 'left'
    },
    {
      label: 'Yesterday',
      value: [addDays(new Date(), -1), addDays(new Date(), -1)],
      placement: 'left'
    },
    {
      label: 'This week',
      value: [startOfWeek(new Date()), endOfWeek(new Date())],
      placement: 'left'
    },
    {
      label: 'Last 7 days',
      value: [subDays(new Date(), 6), new Date()],
      placement: 'left'
    },
    {
      label: 'Last 30 days',
      value: [subDays(new Date(), 29), new Date()],
      placement: 'left'
    },
    {
      label: 'This month',
      value: [startOfMonth(new Date()), new Date()],
      placement: 'left'
    },
    {
      label: 'Last month',
      value: [startOfMonth(addMonths(new Date(), -1)), endOfMonth(addMonths(new Date(), -1))],
      placement: 'left'
    },
    {
      label: 'This year',
      value: [new Date(new Date().getFullYear(), 0, 1), new Date()],
      placement: 'left'
    },
    {
      label: 'Last year',
      value: [new Date(new Date().getFullYear() - 1, 0, 1), new Date(new Date().getFullYear(), 0, 0)],
      placement: 'left'
    },
    {
      label: 'All time',
      value: [new Date(new Date().getFullYear() - 1, 0, 1), new Date()],
      placement: 'left'
    },
    {
      label: 'Last week',
      closeOverlay: false,
      value: value => {
        const [start = new Date()] = value || [];
        return [
          addDays(startOfWeek(start, { weekStartsOn: 0 }), -7),
          addDays(endOfWeek(start, { weekStartsOn: 0 }), -7)
        ];
      },
      appearance: 'default'
    },
    {
      label: 'Next week',
      closeOverlay: false,
      value: value => {
        const [start = new Date()] = value || [];
        return [
          addDays(startOfWeek(start, { weekStartsOn: 0 }), 7),
          addDays(endOfWeek(start, { weekStartsOn: 0 }), 7)
        ];
      },
      appearance: 'default'
    }
  ];

  export  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  

// export const BackendEndPoint = process.env.REACT_APP_API_END_POINT;
// export const BackendEndPoint=process.env.REACT_APP_API_END_POINT
export const BackendEndPoint='https://otrackerdevapi.onpassive.com/'
// export const BackendEndPoint='http://192.168.8.21:8080/'
// export const awsConsolelink = process.env.REACT_APP_AwsConsolelink;

// export const getToken =()=>{return  localStorage.getItem('token');}

//  export const domainId=() =>{ return "111";}
export const domainId=() =>{ return localStorage.getItem('domain_id') ? localStorage.getItem('domain_id') : 0;}
export const domainCode=()=>{return JSON.parse(localStorage.getItem("domain_list"))?.filter(each => { return each.domainCode == domainId() })[0].domainId}

export const maxFileLimit = 5000000;

export const dateFormate = 'dd-MMM-yyyy';
export const dateTimeFormate = 'dd-MMM-yyyy h:mm aa';

export const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
export const headerData=()=>{return localStorage.getItem('token')}
