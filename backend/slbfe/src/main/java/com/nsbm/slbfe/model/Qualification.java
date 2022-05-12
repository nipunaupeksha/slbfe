package com.nsbm.slbfe.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "qualifications")
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class Qualification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int qualificationId;
    @Column(name = "qualification_name")
    private String qualificationName;

    public Qualification(String qualificationName) {
        this.qualificationName = qualificationName;
    }

    public Qualification() {
    }

    public int getQualificationId() {
        return qualificationId;
    }

    public void setQualificationId(int qualificationId) {
        this.qualificationId = qualificationId;
    }

    public String getQualificationName() {
        return qualificationName;
    }

    public void setQualificationName(String qualificationName) {
        this.qualificationName = qualificationName;
    }
}
