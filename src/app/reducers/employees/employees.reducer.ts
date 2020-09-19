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
    default:
      return state;
  }
};
