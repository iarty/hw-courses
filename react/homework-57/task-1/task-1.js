const tasks = [
  { id: 234, title: 'Create user registration API', timeSpent: 4, category: 'Backend', type: 'task' },
  { id: 235, title: 'Create user registration UI', timeSpent: 8, category: 'Frontend', type: 'task' },
  { id: 237, title: 'User sign-in via Google UI', timeSpent: 3.5, category: 'Frontend', type: 'task' },
  { id: 238, title: 'User sign-in via Google API', timeSpent: 5, category: 'Backend', type: 'task' },
  { id: 241, title: 'Fix account linking', timeSpent: 5, category: 'Backend', type: 'bug' },
  { id: 250, title: 'Fix wrong time created on new record', timeSpent: 1, category: 'Backend', type: 'bug' },
  { id: 262, title: 'Fix sign-in failed messages', timeSpent: 2, category: 'Frontend', type: 'bug' },
];

const frontendTime = tasks.reduce((sum, el) => el.category === 'Frontend' ? sum + el.timeSpent : sum, 0);
const bugTime = tasks.reduce((sum, el) => el.type === 'bug' ? sum + el.timeSpent : sum, 0);
const uiName = tasks.reduce((sum, el) => el.title.indexOf('UI') > 0 ? sum + 1 : sum, 0);
const totalTasks = tasks.reduce((sum, el) => Object.assign(sum, sum[el.category]++), { Frontend: 0, Backend: 0 });
const fourHours = tasks.flatMap(el => el.timeSpent > 4 ? { title: el.title, category: el.category } : [])

console.log(`
Общее время затраченное на работу над задачами из категории 'Frontend': ${frontendTime};
Общее время затраченное на работу над задачами типа 'bug': ${bugTime};
Количество задач, имеющих в названии слово "UI": ${uiName};
`);
console.log('Количество задач каждой категории:', totalTasks)
console.log('Задач с затраченным временем больше 4 часов:', fourHours)
