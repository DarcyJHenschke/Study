package com.example.Practice.temps;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/temp")
public class TempController {
	
	@Autowired
	private TempService service;
	
	
	
	@GetMapping
	public ResponseEntity<List<Temp>> all() {
		List<Temp> Temps = service.findAll();
		return new ResponseEntity<>(Temps, HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Temp> findOne(@PathVariable Long id) {
		Optional<Temp> maybeTemp = this.service.findById(id);

		if (maybeTemp.isEmpty()) {
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}

		return new ResponseEntity<>(maybeTemp.get(), HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<Temp> create(@Valid @RequestBody TempCreateDTO data) {
		Temp newTemp = service.createTemp(data);
		return new ResponseEntity<>(newTemp, HttpStatus.OK);
	}
	
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Temp> delete(@PathVariable Long id) {
		boolean isDeleted = service.delete(id);
		if (isDeleted) {
			return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
		} else {
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
		
		
	}
	
	@PutMapping("/{tempId}/job/{jobId}")
	public ResponseEntity<Temp> enrollJobtoTemp(
			@PathVariable Long tempId, 
			@PathVariable Long jobId) {
		Temp updatedTemp = service.enrollJobToTemp(tempId, jobId);
		return new ResponseEntity<>(updatedTemp, HttpStatus.OK);
		
	}

}
