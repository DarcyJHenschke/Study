package com.example.Practice.jobs;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Practice.temps.Temp;
import com.example.Practice.temps.TempsRepository;

@Service
@Transactional
public class JobService {
	
	@Autowired
	private JobsRepository jobRepo;
	
	@Autowired
	private TempsRepository tempRepo;
	
	public Job enrollTempToJob(Long jobId, Long tempId) {
		Job job = jobRepo.findById(jobId).get();
		Temp temp = tempRepo.findById(tempId).get();
		job.setTemp(temp);
		return jobRepo.save(job);
		
	}
	
	public Job createJob(JobCreateDTO data) {
		Job input = new Job(data.getName(), data.getStartDate(), data.getEndDate());
		jobRepo.save(input);
		return input;
	}
	
	public Job createJobWithTemp(JobCreateDTO data) {
		Job input = new Job(data.getName(), data.getStartDate(), data.getEndDate(), data.getTemp());
		jobRepo.save(input);
		return input;
	}
	
	
	public List<Job> findAll() {
		return jobRepo.findAll();
	}
	
	public Optional<Job> findById(Long id) {
		return jobRepo.findById(id);
	}
	
	public boolean delete(Long id) {
		Optional<Job> maybeJob = jobRepo.findById(id);
		if (maybeJob.isEmpty()) {
			return false;
		} else {
			jobRepo.deleteById(id);
			return true;
		}
	}

}
