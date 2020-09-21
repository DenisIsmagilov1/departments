import { types } from './employees.actions';

export const employeesNode = 'employees';

export interface Employees {
  id: number;
  firstName: string;
  lastName: string;
  departmentId: number;
}

export interface EmployeesState {
  loading: boolean;
  error: object;
  data: {
    employees: Employees[]
  };
}

const initialState = {
  loading: true,
  error: null,
  data: {
    employees: [
      { id: 1, firstName: 'Denis', lastName: 'Ismagilov', departmentId: 6 },
      { id: 2, firstName: 'Vadim', lastName: 'Petrov', departmentId: 2 },
      { id: 3, firstName: 'Vadim', lastName: 'Petrov', departmentId: 3 },
      { id: 4, firstName: 'Vadim', lastName: 'Petrov', departmentId: 4 },
      { id: 5, firstName: 'Vadim', lastName: 'Petrov', departmentId: 5 },
      { id: 6, firstName: 'Vadim', lastName: 'Petrov', departmentId: 2 }
    ]
  }
};

export const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getEmployees:
      return {
        loading: true,
        error: null,
        data: {
          ...state.data,
          employees: []
        }
      };
    case types.getEmployeesSuccess:
      return {
        loading: false,
        error: null,
        data: {
          ...state.data,
          employees: action.payload.employees
        }
      };
    case types.deleteEmployeeSuccess:
      const newEmployees = state.data.employees.filter(item => item.id !== action.payload.employeeId);
      return {
        ...state,
        data: {
          ...state.data,
          employees: newEmployees
        }
      };
    case types.createEmployeeSuccess:
      return {
        ...state,
        data: {
          ...state.data,
          employees: [
            ...state.data.employees,
            action.payload
          ]
        }
      };
    case types.updateEmployeeSuccess:
      const index = state.data.employees.findIndex(item => item.id === action.payload.id);
      const updatedEmployees = [
        ...state.data.employees.slice(0, index),
        action.payload,
        ...state.data.employees.slice(index + 1)];
      return {
        ...state,
        data: {
          ...state.data,
          employees: updatedEmployees
        }
      };
    default:
      return state;
  }
};
