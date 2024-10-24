const dataSourceArray = [
    {
      dataSourceName: "Website Traffic Analytics",
      type: "Analytics",
      format: "JSON",
      created: "2023-01-15",
      lastRefresh: "2024-10-22",
      refreshInterval: "Daily",
      owner: "John Doe",
      shared: "Yes"
    },
    {
      dataSourceName: "Social Media Leads",
      type: "Leads",
      format: "CSV",
      created: "2023-06-10",
      lastRefresh: "2024-10-21",
      refreshInterval: "Weekly",
      owner: "Jane Smith",
      shared: "No"
    },
    {
      dataSourceName: "Email Campaign Results",
      type: "Marketing",
      format: "XLSX",
      created: "2022-12-05",
      lastRefresh: "2024-10-20",
      refreshInterval: "Monthly",
      owner: "Mark Johnson",
      shared: "Yes"
    },
    {
      dataSourceName: "Referral Program Stats",
      type: "Leads",
      format: "Google Sheets",
      created: "2023-03-18",
      lastRefresh: "2024-10-19",
      refreshInterval: "Daily",
      owner: "Sarah Brown",
      shared: "Yes"
    },
    {
      dataSourceName: "Other Lead Sources",
      type: "Leads",
      format: "CSV",
      created: "2024-05-07",
      lastRefresh: "2024-10-22",
      refreshInterval: "Weekly",
      owner: "Emma White",
      shared: "No"
    },
    {
      dataSourceName: "Customer Feedback Surveys",
      type: "Feedback",
      format: "XML",
      created: "2023-07-25",
      lastRefresh: "2024-10-18",
      refreshInterval: "Monthly",
      owner: "Liam Green",
      shared: "Yes"
    },
    {
      dataSourceName: "Product Sales Data",
      type: "Sales",
      format: "XLSX",
      created: "2024-02-14",
      lastRefresh: "2024-10-20",
      refreshInterval: "Daily",
      owner: "Olivia Davis",
      shared: "Yes"
    },
    {
      dataSourceName: "Marketing Campaign Analysis",
      type: "Marketing",
      format: "CSV",
      created: "2024-03-05",
      lastRefresh: "2024-10-21",
      refreshInterval: "Weekly",
      owner: "Sophia Moore",
      shared: "No"
    },
    {
      dataSourceName: "Ad Performance Metrics",
      type: "Ads",
      format: "JSON",
      created: "2023-09-08",
      lastRefresh: "2024-10-20",
      refreshInterval: "Daily",
      owner: "Lucas Harris",
      shared: "Yes"
    },
    {
      dataSourceName: "SEO Performance Tracking",
      type: "SEO",
      format: "Google Sheets",
      created: "2024-01-29",
      lastRefresh: "2024-10-19",
      refreshInterval: "Monthly",
      owner: "Mason Clark",
      shared: "Yes"
    },
    {
      dataSourceName: "User Behavior Analytics",
      type: "Analytics",
      format: "XLSX",
      created: "2023-11-11",
      lastRefresh: "2024-10-21",
      refreshInterval: "Weekly",
      owner: "Chloe Wright",
      shared: "No"
    },
    {
      dataSourceName: "E-commerce Conversion Rates",
      type: "Sales",
      format: "CSV",
      created: "2024-06-17",
      lastRefresh: "2024-10-19",
      refreshInterval: "Daily",
      owner: "Zoe Walker",
      shared: "Yes"
    },
    {
      dataSourceName: "Content Engagement Metrics",
      type: "Marketing",
      format: "JSON",
      created: "2023-05-19",
      lastRefresh: "2024-10-20",
      refreshInterval: "Weekly",
      owner: "Emily Hill",
      shared: "Yes"
    },
    {
      dataSourceName: "Partner Referral Data",
      type: "Leads",
      format: "XLSX",
      created: "2023-04-12",
      lastRefresh: "2024-10-21",
      refreshInterval: "Monthly",
      owner: "Jacob Turner",
      shared: "No"
    },
    {
      dataSourceName: "Mobile App Usage Stats",
      type: "App Analytics",
      format: "CSV",
      created: "2024-08-09",
      lastRefresh: "2024-10-22",
      refreshInterval: "Daily",
      owner: "Ella Scott",
      shared: "Yes"
    },
    {
      dataSourceName: "Customer Support Tickets",
      type: "Support",
      format: "Google Sheets",
      created: "2023-02-20",
      lastRefresh: "2024-10-19",
      refreshInterval: "Weekly",
      owner: "James Adams",
      shared: "No"
    },
    {
      dataSourceName: "Subscription Billing Data",
      type: "Billing",
      format: "XML",
      created: "2024-04-04",
      lastRefresh: "2024-10-20",
      refreshInterval: "Monthly",
      owner: "Alexander Mitchell",
      shared: "Yes"
    },
    {
      dataSourceName: "Customer Churn Analysis",
      type: "Analytics",
      format: "JSON",
      created: "2023-09-15",
      lastRefresh: "2024-10-22",
      refreshInterval: "Weekly",
      owner: "Isabella Johnson",
      shared: "No"
    },
    {
      dataSourceName: "Event Registration Data",
      type: "Events",
      format: "CSV",
      created: "2024-07-26",
      lastRefresh: "2024-10-18",
      refreshInterval: "Daily",
      owner: "Mia Thompson",
      shared: "Yes"
    },
    {
      dataSourceName: "Affiliate Marketing Stats",
      type: "Marketing",
      format: "XLSX",
      created: "2023-10-30",
      lastRefresh: "2024-10-19",
      refreshInterval: "Monthly",
      owner: "Grace Martinez",
      shared: "No"
    },
    {
        dataSourceName: "Customer Behavior Analysis",
        type: "Analytics",
        format: "CSV",
        created: "2023-04-12",
        lastRefresh: "2024-10-21",
        refreshInterval: "Weekly",
        owner: "Emily Carter",
        shared: "Yes"
      },
      {
        dataSourceName: "Conversion Rate Metrics",
        type: "Analytics",
        format: "XLSX",
        created: "2024-03-01",
        lastRefresh: "2024-10-18",
        refreshInterval: "Monthly",
        owner: "Jacob Lewis",
        shared: "Yes"
      },
      {
        dataSourceName: "Sales Conversion Funnel",
        type: "Sales",
        format: "Google Sheets",
        created: "2023-02-25",
        lastRefresh: "2024-10-19",
        refreshInterval: "Daily",
        owner: "Michael Turner",
        shared: "No"
      },
      {
        dataSourceName: "Paid Advertising Data",
        type: "Ads",
        format: "JSON",
        created: "2024-05-22",
        lastRefresh: "2024-10-22",
        refreshInterval: "Weekly",
        owner: "Chloe Harris",
        shared: "Yes"
      },
      {
        dataSourceName: "Web Traffic Heatmap",
        type: "Analytics",
        format: "XML",
        created: "2024-01-18",
        lastRefresh: "2024-10-20",
        refreshInterval: "Monthly",
        owner: "Nathan Wilson",
        shared: "Yes"
      },
      {
        dataSourceName: "Lead Source Breakdown",
        type: "Leads",
        format: "Google Sheets",
        created: "2023-08-13",
        lastRefresh: "2024-10-19",
        refreshInterval: "Daily",
        owner: "Charlotte Robinson",
        shared: "No"
      },
      {
        dataSourceName: "User Demographic Data",
        type: "Analytics",
        format: "XLSX",
        created: "2023-10-07",
        lastRefresh: "2024-10-21",
        refreshInterval: "Monthly",
        owner: "Oliver Martinez",
        shared: "Yes"
      },
      {
        dataSourceName: "Product Feedback Analysis",
        type: "Feedback",
        format: "CSV",
        created: "2024-03-17",
        lastRefresh: "2024-10-22",
        refreshInterval: "Weekly",
        owner: "Sophia Thompson",
        shared: "Yes"
      },
      {
        dataSourceName: "SEO Keyword Rankings",
        type: "SEO",
        format: "Google Sheets",
        created: "2023-09-30",
        lastRefresh: "2024-10-20",
        refreshInterval: "Monthly",
        owner: "Lucas Anderson",
        shared: "No"
      },
      {
        dataSourceName: "Social Media Engagement",
        type: "Social Media",
        format: "JSON",
        created: "2023-05-14",
        lastRefresh: "2024-10-18",
        refreshInterval: "Weekly",
        owner: "Amelia Davis",
        shared: "Yes"
      },
      {
        dataSourceName: "Marketing Budget Allocation",
        type: "Marketing",
        format: "XLSX",
        created: "2024-02-02",
        lastRefresh: "2024-10-19",
        refreshInterval: "Daily",
        owner: "Liam Walker",
        shared: "Yes"
      },
      {
        dataSourceName: "CRM Data Integration",
        type: "Sales",
        format: "XML",
        created: "2023-06-25",
        lastRefresh: "2024-10-21",
        refreshInterval: "Monthly",
        owner: "Emma White",
        shared: "Yes"
      },
      {
        dataSourceName: "Ad Click-Through Rates",
        type: "Ads",
        format: "CSV",
        created: "2023-11-10",
        lastRefresh: "2024-10-22",
        refreshInterval: "Weekly",
        owner: "Mason Hall",
        shared: "No"
      },
      {
        dataSourceName: "Newsletter Campaign Stats",
        type: "Marketing",
        format: "XLSX",
        created: "2024-04-12",
        lastRefresh: "2024-10-20",
        refreshInterval: "Monthly",
        owner: "Ethan King",
        shared: "Yes"
      },
      {
        dataSourceName: "Inventory Levels Tracking",
        type: "Sales",
        format: "Google Sheets",
        created: "2023-07-19",
        lastRefresh: "2024-10-19",
        refreshInterval: "Daily",
        owner: "Isabella Scott",
        shared: "Yes"
      },
      {
        dataSourceName: "Mobile App Analytics",
        type: "Analytics",
        format: "JSON",
        created: "2023-10-05",
        lastRefresh: "2024-10-21",
        refreshInterval: "Daily",
        owner: "William Wright",
        shared: "No"
      },
      {
        dataSourceName: "Customer Satisfaction Scores",
        type: "Feedback",
        format: "XLSX",
        created: "2023-03-18",
        lastRefresh: "2024-10-22",
        refreshInterval: "Monthly",
        owner: "Emily Johnson",
        shared: "Yes"
      },
      {
        dataSourceName: "Discount Campaign Performance",
        type: "Marketing",
        format: "CSV",
        created: "2024-02-26",
        lastRefresh: "2024-10-20",
        refreshInterval: "Weekly",
        owner: "Benjamin Clark",
        shared: "Yes"
      },
      {
        dataSourceName: "Website Conversion Rates",
        type: "Analytics",
        format: "Google Sheets",
        created: "2023-12-09",
        lastRefresh: "2024-10-19",
        refreshInterval: "Daily",
        owner: "Ava Lewis",
        shared: "Yes"
      },
      {
        dataSourceName: "Customer Loyalty Program",
        type: "Leads",
        format: "XLSX",
        created: "2024-01-27",
        lastRefresh: "2024-10-18",
        refreshInterval: "Monthly",
        owner: "Jack Lee",
        shared: "No"
      }
  ];
  
  export  default dataSourceArray;