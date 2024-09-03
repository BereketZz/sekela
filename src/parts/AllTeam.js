import React from "react";

import Fade from "react-awesome-reveal";

export default function AllTeam({ data }) {
  return (
    <section className="container mx-0 sm:mx-auto">
      <div className="grid grid-cols-1 gap-24 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((team, index) => {
          return (
            <Fade bottom triggerOnce delay={200 * index}>
              <div className="space-y-4 text-center">
                <img
                  className="mx-auto h-64 w-64 rounded-xl object-cover md:h-40 md:w-40 lg:h-64 lg:w-64"
                  src={team.imageUrl}
                  alt={`${team.name}`}
                  loading="lazy"
                  width="640"
                  height="805"
                />
                <div>
                  <h4 className="text-2xl">{team.name}</h4>
                  <span className="block text-sm text-gray-500">
                    {" "}
                    {team.position}
                  </span>
                </div>
              </div>
            </Fade>
          );
        })}
      </div>
    </section>
  );
}
