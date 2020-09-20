import { departmentActionsType } from './departments.actions';

export const departmentsNode = 'departments';

export interface Department {
  id: number;
  name: string;
  description: string;
}

export interface DepartmentsState {
  loading: boolean;
  error: object;
  data: {
    departments: Department[];
  };
}

const initialState: DepartmentsState = {
  loading: true,
  error: null,
  data: {
    departments: [
      { id: 1, name: 'Marketing', description: 'Marketing description' },
      { id: 2, name: 'Support', description: 'Support description' },
      { id: 3, name: 'Accounting', description: 'Accounting description' },
      { id: 4, name: 'General', description: 'General description' },
      { id: 5, name: 'Administrative', description: 'Administrative description' },
      { id: 6, name: 'Frontend', description: 'Frontend description' },
    ]
  }
};

export const departmentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case departmentActionsType.delete:
      let newDepartments = state.data.departments.filter(item => item.id !== action.payload.departmentId);
      return {
        ...state,
        data: {
          ...state.data,
          departments: newDepartments
        }
      };
    case departmentActionsType.create:
      const newDepartment = {
        id: Date.now(),
        name: action.payload.name,
        description: action.payload.description
      };
      return {
        ...state,
        data: {
          ...state.data,
          departments: [
            ...state.data.departments,
            newDepartment
          ]
        }
      };
    default:
      return state;
  }
};
