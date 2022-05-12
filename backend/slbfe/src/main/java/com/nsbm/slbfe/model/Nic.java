package com.nsbm.slbfe.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name="nic")
@JsonIgnoreProperties({"hibernateLazyInitializer","handler"})
public class Nic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name="nic_id")
    private String nicId;
    @Column(name="nic_file")
    private String nicFile;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "nic")
    @JsonIgnore
    private Citizen citizen;

    public Nic(String nicId, String nicFile) {
        this.nicId = nicId;
        this.nicFile = nicFile;
    }

    public Nic() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNicId() {
        return nicId;
    }

    public void setNicId(String nicId) {
        this.nicId = nicId;
    }

    public String getNicFile() {
        return nicFile;
    }

    public void setNicFile(String nicFile) {
        this.nicFile = nicFile;
    }

    public Citizen getCitizen() {
        return citizen;
    }

    public void setCitizen(Citizen citizen) {
        this.citizen = citizen;
    }
}
