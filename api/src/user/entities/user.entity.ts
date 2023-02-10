import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    comment: 'PK',
  })
  id: number;

  @CreateDateColumn({
    comment: '생성일시',
  })
  created: Date;

  @UpdateDateColumn({
    comment: '수정일시',
  })
  updated: Date;

  @DeleteDateColumn({
    comment: '삭제일시',
  })
  deleted: Date;

  @Index({ unique: true })
  @Column({
    comment: '이메일',
  })
  email: string;

  @Column({
    comment: '비밀번호',
  })
  password: string;

  @Column({
    comment: '핸드폰',
  })
  phone: string;

  @Column({
    comment: '주소 1',
  })
  address1: string;

  @Column({
    comment: '주소 2',
  })
  address2: string;
}
