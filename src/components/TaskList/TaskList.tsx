import {ITodo} from '../../types/types';
import { TaskItem } from '../TaskItem/TaskItem';

interface ITodoList {
  items: ITodo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

export const TaskList = (props: ITodoList) => {
  const {items, toggleTodo, removeTodo} = props;

  return <div>
    {items.map(todo => (
      <TaskItem 
      key={todo.id}
      toggleTodo={toggleTodo}
      removeTodo={removeTodo}
      {...todo}
      />
    ))}
  </div>
}