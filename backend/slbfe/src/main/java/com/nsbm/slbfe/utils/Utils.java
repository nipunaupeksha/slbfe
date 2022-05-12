package com.nsbm.slbfe.utils;

import com.nsbm.slbfe.model.Citizen;
import com.nsbm.slbfe.repository.CitizenRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Component
public class Utils {

    public Citizen findCitizenOrThrowNotFound(String nid, CitizenRepository citizenRepository) {
        Optional<Citizen> citizenFound =  citizenRepository.findByNicId(nid);
        if(!citizenFound.isPresent()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,String.format("Citizen with nid: %s not found", nid));
        }
        return citizenFound.get();
    }

    public Citizen validCitizenOrThrowNotFound(String email, String password, CitizenRepository citizenRepository){

        Optional<Citizen> citizenFound = citizenRepository.findByEmailAndPassword(email, password);
        if(!citizenFound.isPresent()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,String.format("Citizen with email: %s not found", email));
        }
        return citizenFound.get();
    }
}
