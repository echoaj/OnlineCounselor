package com.counselor.scheduler.models;

import lombok.Data;

@Data
public class Student {

//    General Information
    private String fname;
    private String lname;
    private String grade;

//    Required & Wanted Classes
    private Integer termLength;
    private Integer numPeriods;
    private String[] requiredSubjects;
    private Integer[] requiredSubjectsLength;
    private String[] wantedSubjects;
    private String[] wantedClasses;
    private Integer freePeriod;

//    Skills & Interests
    private Integer artSkills;
    private Integer artInterest;
    private Integer mathSkills;
    private Integer mathInterest;
    private Integer foreign_languageSkills;
    private Integer foreign_languageInterest;
    private Integer historySkills;
    private Integer historyInterest;
    private Integer life_scienceSkills;
    private Integer life_scienceInterest;
    private Integer physical_scienceSkills;
    private Integer physical_scienceInterest;
    private Integer healthSkills;
    private Integer healthInterest;
    private Integer peSkills;
    private Integer peInterest;
    private Integer electiveSkills;
    private Integer electiveInterest;

//    Rate The Challenge you seek
    private Integer challengeDesired;
}
