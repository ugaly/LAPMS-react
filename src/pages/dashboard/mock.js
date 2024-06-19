const mock = {
  tasks: [
    {
      id: 0,
      type: "Meeting",
      title: "Meeting with Andrew Piker",
      time: "9:00"
    },
    {
      id: 1,
      type: "Call",
      title: "Call with HT Company",
      time: "12:00"
    },
    {
      id: 2,
      type: "Meeting",
      title: "Meeting with Zoe Alison",
      time: "14:00"
    },
    {
      id: 3,
      type: "Interview",
      title: "Interview with HR",
      time: "15:00"
    }
  ],
  bigStat: [
    {
      product: "Total asked questions",
      total: {

        daily: 199,
        
      },
     
    },
    {
      product: "Total complaints received",
      total: {
       
        daily: 27,
        
      },
     
    },
    {
      product: "RNS",
      total: {
       
        daily: 44,
        
      },
     
    }
  ],
  notifications: [
    {
      id: 0,
      icon: "thumbs-up",
      color: "primary",
      content:
        'Ken <span className="fw-semi-bold">accepts</span> your invitation'
    },
    {
      id: 1,
      icon: "file",
      color: "success",
      content: "Report from LT Company"
    },
    {
      id: 2,
      icon: "envelope",
      color: "danger",
      content: '4 <span className="fw-semi-bold">Private</span> Mails'
    },
    {
      id: 3,
      icon: "comment",
      color: "success",
      content: '3 <span className="fw-semi-bold">Comments</span> to your Post'
    },
    {
      id: 4,
      icon: "cog",
      color: "light",
      content: 'New <span className="fw-semi-bold">Version</span> of RNS app'
    },
    {
      id: 5,
      icon: "bell",
      color: "info",
      content:
        '15 <span className="fw-semi-bold">Notifications</span> from Social Apps'
    }
  ],
  table: [
    {
      id: 0,
      name: "Mark Otto",
      email: "ottoto@wxample.com",
      product: "ON the Road",
      price: "$25 224.2",
      date: "11 May 2017",
      city: "Otsego",
      status: "Sent"
    },
    {
      id: 1,
      name: "Jacob Thornton",
      email: "thornton@wxample.com",
      product: "HP Core i7",
      price: "$1 254.2",
      date: "4 Jun 2017",
      city: "Fivepointville",
      status: "Sent"
    },
    {
      id: 2,
      name: "Larry the Bird",
      email: "bird@wxample.com",
      product: "Air Pro",
      price: "$1 570.0",
      date: "27 Aug 2017",
      city: "Leadville North",
      status: "Pending"
    },
    {
      id: 3,
      name: "Joseph May",
      email: "josephmay@wxample.com",
      product: "Version Control",
      price: "$5 224.5",
      date: "19 Feb 2018",
      city: "Seaforth",
      status: "Declined"
    },
    {
      id: 4,
      name: "Peter Horadnia",
      email: "horadnia@wxample.com",
      product: "Let's Dance",
      price: "$43 594.7",
      date: "1 Mar 2018",
      city: "Hanoverton",
      status: "Sent"
    }
  ]
};

export default mock;