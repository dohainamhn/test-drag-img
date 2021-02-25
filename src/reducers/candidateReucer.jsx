const initialValue = [
  {
    data: [
      {
        id: "117",
        name: "Daniel Ebersole",
        url: "https://picsum.photos/id/117/1544/1024",
      },
      {
        id: "118",
        name: "Rick Waalders",
        url: "https://picsum.photos/id/118/1500/1000",
      },
      {
        id: "119",
        name: "Nadir Balcikli",
        url: "https://picsum.photos/id/119/3264/2176",
      },
      {
        id: "12",
        name: "Paul Jarvis",
        url: "https://picsum.photos/id/12/2500/1667",
      },
      {
        id: "120",
        name: "Guillaume",
        url: "https://picsum.photos/id/120/4928/3264",
      },

      {
        id: "123",
        name: "Mark Doda",
        url: "https://picsum.photos/id/123/4928/3264",
      },
      {
        id: "124",
        name: "Anton Sulsky",
        url: "https://picsum.photos/id/124/3504/2336",
      },
      {
        id: "125",
        name: "Rick Waalders",
        url: "https://picsum.photos/id/125/1500/1000",
      },
    ],
  },
  {
    data: [
      {
        id: "117",
        name: "Daniel Ebersole",
        url: "https://picsum.photos/id/127/1544/1024",
      },
      {
        id: "118",
        name: "Rick Waalders",
        url: "https://picsum.photos/id/128/1500/1000",
      },
      {
        id: "119",
        name: "Nadir Balcikli",
        url: "https://picsum.photos/id/129/3264/2176",
      },
      {
        id: "12",
        name: "Paul Jarvis",
        url: "https://picsum.photos/id/134/2500/1667",
      },
      {
        id: "120",
        name: "Guillaume",
        url: "https://picsum.photos/id/110/4928/3264",
      },

      {
        id: "123",
        name: "Mark Doda",
        url: "https://picsum.photos/id/126/4928/3264",
      },
      {
        id: "124",
        name: "Anton Sulsky",
        url: "https://picsum.photos/id/134/3504/2336",
      },
      {
        id: "125",
        name: "Rick Waalders",
        url: "https://picsum.photos/id/154/1500/1000",
      },
    ],
  },
];

const candidate = (state = initialValue, action) => {
  switch (action.type) {
    case "REMOVE_FIRST": {
      console.log("dist");
      const newState = [...state];
      newState.splice(0, 1);

      return newState;
    }
    default: {
      return state;
    }
  }
};

export default candidate;
