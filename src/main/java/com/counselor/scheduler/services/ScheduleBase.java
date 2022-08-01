package com.counselor.scheduler.services;

public abstract class ScheduleBase {

    public abstract void set_next_chain(ScheduleBase next_chain);

    public abstract void calculate(ScheduleBase student);

}
