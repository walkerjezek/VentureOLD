const { Activity, Matchup } = require('../models');

const resolvers = {
  Query: {
    activity: async () => {
      return Activity.find({});
    },
    matchups: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Matchup.find(params);
    },
  },
  Mutation: {
    createMatchup: async (parent, args) => {
      const matchup = await Matchup.create(args);
      return matchup;
    },
  },
};

module.exports = resolvers;
