package com.nsbm.slbfe.controller;

import com.nsbm.slbfe.model.Citizen;
import com.nsbm.slbfe.model.Contact;
import com.nsbm.slbfe.model.Nic;
import com.nsbm.slbfe.model.ValidationObj;
import com.nsbm.slbfe.service.CitizenService;
import com.nsbm.slbfe.utils.Utils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@Slf4j
@RequestMapping("citizens")
@RequiredArgsConstructor
public class CitizenController {

    private final CitizenService citizenService;

    @GetMapping
    public ResponseEntity<List<Citizen>> listAll() {

        return ResponseEntity.ok(citizenService.listAll());
    }

    @GetMapping(path = "/{nid}")
    public ResponseEntity<Citizen> findById(@PathVariable String nid) {

        return ResponseEntity.ok(citizenService.findById(nid));
    }

    @PostMapping
    public ResponseEntity<Citizen> save(@RequestBody Citizen citizen) {

        Nic nic = citizen.getNic();
        nic.setNicId(nic.getNicId().toLowerCase());
        citizen.setNic(nic);
        return ResponseEntity.ok(citizenService.save(citizen));
    }

    @DeleteMapping(path = "/{nid}")
    public ResponseEntity<Void> delete(@PathVariable String nid) {

        citizenService.delete(nid);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping(path = "/{nid}")
    public ResponseEntity<Void> update(@PathVariable String nid, @RequestBody Citizen citizen) {

        citizenService.update(nid, citizen);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping(path="/{nid}/contacts")
    public ResponseEntity<Contact> getContacts(@PathVariable String nid){

        return ResponseEntity.ok(citizenService.getContactInfo(nid));
    }

    @PostMapping(path="/validate")
    public ResponseEntity<Citizen> validation(@RequestBody ValidationObj obj){

        return ResponseEntity.ok(citizenService.getValidObj(obj));
    }
}
