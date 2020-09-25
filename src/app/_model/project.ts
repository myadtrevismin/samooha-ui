import {User} from './user';

export interface Project{
  plotId: number;
  plotName: string;
  location: string;
  filePath: string;
  uploadedDate: Date;
  uploadedBy: string;
  user?: User;
  sections: null;
  active?: boolean;
}
