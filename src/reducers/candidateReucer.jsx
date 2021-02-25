const initialValue = [
  {
    data: [
      {
        id: "117",
        name: "Daniel Ebersole",
        url: "https://picsum.photos/id/117/1544/1024",
      }
    ],
  },
  {
    data: [
      {
        id: "116",
        name: "Daniel Ebersole",
        url: "https://picsum.photos/id/237/200/300",
      }
    ],
  },
  {
    data: [
      {
        id: "115",
        name: "Daniel Ebersole",
        url: "https://picsum.photos/seed/picsum/200/300",
      }
    ],
  },
  {
    data: [
      {
        id: "114",
        name: "Daniel Ebersole",
        url: "https://picsum.photos/200/300?grayscale",
      }
    ],
  },
  {
    data: [
      {
        id: "113",
        name: "Daniel Ebersole",
        url: "https://picsum.photos/200/300/?blur",
      }
    ],
  },
];

const candidate = (state = initialValue, action) => {
  switch (action.type) {
    case "REMOVE_FIRST": {
      console.log("dist");
      const newState = [...state];
      newState.shift()

      return newState;
    }
    default: {
      return state;
    }
  }
};

export default candidate;
