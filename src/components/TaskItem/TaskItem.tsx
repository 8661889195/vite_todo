import { ITodo } from '../../types/types';

interface ITodoItem extends ITodo {
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

export const TaskItem = (props: ITodoItem) => {
  const { id, title, complete, toggleTodo, removeTodo } = props;

  return  <div>
    <input 
    type="checkbox"
    checked={complete}
    onChange={() => toggleTodo(id)}
    />
    <span style={{display: 'inline-block', margin: '10px'}}>{title}</span>
    <button
    onClick={() => removeTodo(id)}
    style={{background: 'transparent', border: 'none', outline: 'none', color: 'red'}}
    >x</button>
  </div>
}