package com.nsbm.slbfe.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity
@Table(name = "birth_certificates")
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class BirthCertificate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "birth_certificate_id")
    private String birthCertificateId;
    @Column(name = "birth_certificate_file")
    private String birthCertificateFile;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "birthCertificate")
    @JsonIgnore
    private Citizen citizen;

    public BirthCertificate(String birthCertificateId, String birthCertificateFile) {
        this.birthCertificateId = birthCertificateId;
        this.birthCertificateFile = birthCertificateFile;
    }

    public BirthCertificate() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBirthCertificateId() {
        return birthCertificateId;
    }

    public void setBirthCertificateId(String birthCertificateId) {
        this.birthCertificateId = birthCertificateId;
    }

    public String getBirthCertificateFile() {
        return birthCertificateFile;
    }

    public void setBirthCertificateFile(String birthCertificateFile) {
        this.birthCertificateFile = birthCertificateFile;
    }

    public Citizen getCitizen() {
        return citizen;
    }

    public void setCitizen(Citizen citizen) {
        this.citizen = citizen;
    }
}
