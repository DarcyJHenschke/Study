package com.example.Practice.jobs;


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

import com.example.Practice.temps.Temp;



@RestController
@RequestMapping("/job")
public class JobController {
	
	
	@Autowired
	private JobService service;
	
	@GetMapping
	public ResponseEntity<List<Job>> all() {
		List<Job> jobs = service.findAll();
		return new ResponseEntity<>(jobs, HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Job> findOne(@PathVariable Long id) {
		Optional<Job> maybeJob = this.service.findById(id);

		if (maybeJob.isEmpty()) {
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}

		return new ResponseEntity<>(maybeJob.get(), HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<Job> create(@Valid @RequestBody JobCreateDTO data) {
		Job newJob = service.createJob(data);
		return new ResponseEntity<>(newJob, HttpStatus.OK);
	}
	
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Job> delete(@PathVariable Long id) {
		boolean isDeleted = service.delete(id);
		if (isDeleted) {
			return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
		} else {
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
		
		
	}
	
	
	@PutMapping("/{jobId}/temp/{tempId}")
	public ResponseEntity<Job> enrollJobtoTemp(
			@PathVariable Long jobId, 
			@PathVariable Long tempId) {
		Job updatedJob = service.enrollTempToJob(jobId, tempId);
		return new ResponseEntity<>(updatedJob, HttpStatus.OK);
		
	}

	
	
	
}
