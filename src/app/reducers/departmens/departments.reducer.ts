import { types } from './departments.actions';

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
  loading: false,
  error: null,
  data: {
    departments: []
  }
};

export const departmentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getDepartments:
      return {
        loading: true,
        error: null,
        data: {
          ...state.data,
          departments: []
        }
      };
    case types.getDepartmentsSuccess:
      return {
        loading: false,
        error: null,
        data: {
          ...state.data,
          departments: action.payload.departments
        }
      };
    case types.createDepartmentSuccess:
      return {
        ...state,
        data: {
          ...state.data,
          departments: [
            ...state.data.departments,
            action.payload
          ]
        }
      };
    case types.deleteDepartmentSuccess:
      const newDepartments = state.data.departments.filter(item => item.id !== action.payload.departmentId);
      return {
        ...state,
        data: {
          ...state.data,
          departments: newDepartments
        }
      };
    case types.updateDepartmentSuccess:
      const index = state.data.departments.findIndex(item => item.id === action.payload.id);
      const updatedDepartments = [
        ...state.data.departments.slice(0, index),
        action.payload,
        ...state.data.departments.slice(index + 1)];
      return {
        ...state,
        data: {
          ...state.data,
          departments: updatedDepartments
        }
      };
    default:
      return state;
  }
};
