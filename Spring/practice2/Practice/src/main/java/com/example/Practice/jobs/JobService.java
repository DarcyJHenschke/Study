package com.example.Practice.jobs;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class JobService {
	
	@Autowired
	private JobsRepository repository;
	
	public Job createJob(JobCreateDTO data) {
		Job input = new Job(data.getName(), data.getStartDate(), data.getEndDate());
		repository.save(input);
		return input;
	}
	
	public List<Job> findAll() {
		return repository.findAll();
	}
	
	public Optional<Job> findById(Long id) {
		return repository.findById(id);
	}
	
	public boolean delete(Long id) {
		Optional<Job> maybeJob = repository.findById(id);
		if (maybeJob.isEmpty()) {
			return false;
		} else {
			repository.deleteById(id);
			return true;
		}
	}

}
