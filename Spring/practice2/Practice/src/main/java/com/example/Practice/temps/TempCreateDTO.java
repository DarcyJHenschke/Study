package com.example.Practice.temps;

import java.util.List;

import javax.validation.constraints.NotBlank;

import com.example.Practice.jobs.Job;

public class TempCreateDTO {
	
	
	@NotBlank
	String firstName;
	
	@NotBlank
	String lastName;
	
	List<Job> jobs;

	public TempCreateDTO(@NotBlank String firstName, @NotBlank String lastName, List<Job> jobs) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.jobs = jobs;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public List<Job> getJobs() {
		return jobs;
	}

	public void setJobs(Job job) {
		jobs.add(job);
	}
	
	
	

}
