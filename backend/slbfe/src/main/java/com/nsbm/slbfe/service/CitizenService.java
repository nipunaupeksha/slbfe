package com.nsbm.slbfe.service;

import com.nsbm.slbfe.model.Citizen;
import com.nsbm.slbfe.model.Contact;
import com.nsbm.slbfe.model.ValidationObj;
import com.nsbm.slbfe.repository.CitizenRepository;
import com.nsbm.slbfe.utils.Utils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class CitizenService {

    private final Utils utils;
    private final CitizenRepository citizenRepository;

    public List<Citizen> listAll() {

        return citizenRepository.findAll();
    }

    public Citizen findById(String nid){

        return utils.findCitizenOrThrowNotFound(nid.toLowerCase(), citizenRepository);
    }

    public Citizen save(Citizen citizen) {

        return citizenRepository.save(citizen);
    }

    public void delete(String nid) {

        citizenRepository.delete(utils.findCitizenOrThrowNotFound(nid.toLowerCase(), citizenRepository));
    }

    public void update(String nid, Citizen citizen) {

        this.delete(nid);
        citizenRepository.save(citizen);
    }

    public Contact getContactInfo(String nid){

        Citizen citizen = utils.findCitizenOrThrowNotFound(nid.toLowerCase(), citizenRepository);
        Contact contact = new Contact(String.format("%s %s",citizen.getFirstName(),citizen.getLastName()), citizen.getEmail(),
                citizen.getPhone(), citizen.getMobile(), citizen.getAddress());
        return contact;
    }

    public Citizen getValidObj(ValidationObj obj){

        Citizen citizen = utils.validCitizenOrThrowNotFound(obj.getEmail(), obj.getPassword(), citizenRepository);
        return citizen;
    }
}
