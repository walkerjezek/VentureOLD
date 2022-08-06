import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_ACTIVITY } from '../utils/queries';

const Landing = () => {
  const { loading, data } = useQuery(QUERY_ACTIVITY);




  return (
    <div>
      <div style="background-color: rgb(152, 216, 146);">
        <section id="landing">
            <div class="ventureLanding">
                <h1>Hello! What do you want to do today?</h1>
            </div>
            <div class="activitiesList">
                <div class="btn-group-vertical" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-secondary">Mountain Biking</button>
                    <button type="button" class="btn btn-secondary">Road Biking</button>
                    <button type="button" class="btn btn-secondary">Skiing</button>
                    <button type="button" class="btn btn-secondary">Snowboarding</button>
                    <button type="button" class="btn btn-secondary">Hiking</button>
                    <button type="button" class="btn btn-secondary">Climbing</button>
                    <button type="button" class="btn btn-secondary">Rafting</button>
                    <button type="button" class="btn btn-secondary">Kayaking</button>
                    <button type="button" class="btn btn-secondary">Tubing</button>
                    <button type="button" class="btn btn-secondary">Paddle Boarding</button>
                    <button type="button" class="btn btn-secondary">Tennis</button>
                    <button type="button" class="btn btn-secondary">Golf</button>
                </div>
            </div>
        </section>
</div>
    </div>
  );
};

export default Landing;
