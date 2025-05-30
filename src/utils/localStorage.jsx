const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "e@e.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      { 
        taskNumber: 1,
        title: "Prepare sales report",
        description: "Gather data and prepare the monthly sales report.",
        date: "2025-04-05",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskNumber: 2,
        title: "Client follow-up",
        description: "Follow up with client regarding the new proposal.",
        date: "2025-04-03",
        category: "Communication",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskNumber: 3,
        title: "Inventory check",
        description: "Check stock levels for the warehouse.",
        date: "2025-04-02",
        category: "Logistics",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    firstName: "Ishaan",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        taskNumber: 1,
        title: "Update product listings",
        description: "Revise product descriptions and pricing.",
        date: "2025-04-06",
        category: "E-commerce",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskNumber: 2,
        title: "Meeting with supplier",
        description: "Discuss the terms for upcoming orders.",
        date: "2025-04-01",
        category: "Procurement",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskNumber: 3,
        title: "Internal training",
        description: "Conduct training for new interns.",
        date: "2025-04-07",
        category: "HR",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    firstName: "Vivaan",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskNumber: 1,
        title: "Bug fix: login module",
        description: "Fix the session timeout issue in the login module.",
        date: "2025-04-04",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskNumber: 2,
        title: "Design new landing page",
        description: "Create UI/UX mockups for the upcoming landing page.",
        date: "2025-04-08",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskNumber: 3,
        title: "Test payment gateway",
        description: "Perform regression testing on the new payment gateway.",
        date: "2025-04-05",
        category: "QA",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 4,
    firstName: "Reyansh",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        taskNumber: 1,
        title: "Social media strategy",
        description: "Plan posts for the next two weeks.",
        date: "2025-04-03",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskNumber: 2,
        title: "Campaign performance analysis",
        description: "Analyze and report on last month's ad campaign.",
        date: "2025-04-02",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskNumber: 3,
        title: "Customer survey",
        description: "Create and send a feedback survey to recent buyers.",
        date: "2025-04-07",
        category: "Customer Success",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstName: "Krishna",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskNumber: 1,
        title: "System backup",
        description: "Run full system backup before patching.",
        date: "2025-04-06",
        category: "IT",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskNumber: 2,
        title: "Security audit",
        description: "Check for vulnerabilities in server logs.",
        date: "2025-04-04",
        category: "Security",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        taskNumber: 3,
        title: "Install updates",
        description: "Apply the latest OS patches on all devices.",
        date: "2025-04-08",
        category: "Maintenance",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  }
];

  
const admin = [{
          "id": 1,
          "email": "admin@example.com",
          "password": "123"
        }
    ];

export const setLocalStorage = ()=>{
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage=()=>{
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  return{employees,admin}
}
