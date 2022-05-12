package com.nsbm.slbfe.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity
@Table(name = "passports")
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class Passport {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "passpord_id")
    private String passportId;
    @Column(name = "passport_file")
    private String passportFile;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "passport")
    @JsonIgnore
    private Citizen citizen;

    public Passport(String passportId, String passportFile) {
        this.passportId = passportId;
        this.passportFile = passportFile;
    }

    public Passport() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPassportId() {
        return passportId;
    }

    public void setPassportId(String passportId) {
        this.passportId = passportId;
    }

    public String getPassportFile() {
        return passportFile;
    }

    public void setPassportFile(String passportFile) {
        this.passportFile = passportFile;
    }

    public Citizen getCitizen() {
        return citizen;
    }

    public void setCitizen(Citizen citizen) {
        this.citizen = citizen;
    }
}
