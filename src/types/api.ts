export interface Employee {
  id: string;
  name: string;
  title: string;
  department: string;
  email: string;
  phone: string;
  bio: string;
  skills: string[];
  avatar: string;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
}

export interface EmployeeApi {
  // 获取员工信息
  getEmployee: (id: string) => Promise<ApiResponse<Employee>>;
  
  // 更新员工信息
  updateEmployee: (id: string, data: Partial<Employee>) => Promise<ApiResponse<Employee>>;
  
  // 上传头像
  uploadAvatar: (id: string, file: File) => Promise<ApiResponse<{ avatarUrl: string }>>;
} 