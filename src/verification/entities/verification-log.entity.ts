import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Index } from 'typeorm';
import { VerificationStatus } from '../interfaces/verification.interface';


@Entity()
@Index(['eventId', 'ticketId'])
export class VerificationLogEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    ticketCode: string;

    @Column({ nullable: true })
    ticketId: string;

    @Column()
    eventId: string;

    @Column({ type: 'enum', enum: VerificationStatus })
    status: VerificationStatus;

    @Column({ nullable: true })
    verifierId: string;

    @Column()
    message: string;

    @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP' })
    attemptedAt: Date;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
