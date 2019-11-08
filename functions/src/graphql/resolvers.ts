import firestore from "../singleton/firestore";
import Works from "../entities/Works";

const resolvers = {
  Query: {
    async workses() {
      const workses = await firestore.collection("works").get();
      return workses.docs.map(works => works.data()) as Works[];
    },

    async getWorksByName(_: any, args: any, __: any, ___: any) {
      const worksData = await firestore
        .collection("works")
        .doc("yC2qmXpNyT8GpZpD0PIL")
        .get();
      return worksData.data() as Works;
    }
  },
  Mutation: {
    async createWorks(_: any, args: any, __: any, ___: any) {
      try {
        await firestore.collection("works").add({
          name: args.works.name,
          thumb: args.works.thumb
        });
      } catch (err) {
        console.error(err);
      }
    }
  }
};

export default resolvers;
