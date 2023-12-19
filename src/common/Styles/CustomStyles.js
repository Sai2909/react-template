export const customStyles = (textCapitalize = true, field = "") => {
  return {
    control: (base, state) => ({
      ...base,
      textTransform: field == "url" && textCapitalize ? "capitalize" : "",
      fontSize: "14px !important",
      color: "var(--text-color)",
      background: "var(--input-bg-color)",
      borderRadius: "8px",
      borderColor: "var(--input-border-color)",
      // borderColor: state.isFocused ? "var(--input-border-bgcolor)":"var(--input-border-color)",
      boxShadow: state.isFocused ? "#D7D7FF" : "#C8E8FC",
      "&:hover": {
        borderColor: "var(--input-border-color)",
        // borderColor: state.isFocused ? "var(--input-border-bgcolor)":"var(--input-border-color)",
      },
    }),
    option: (styles, state) => {
      return {
        ...styles,
        fontSize: "14px !important",
        textTransform:
          (field === "website" && !textCapitalize) ||
          field === "url" ||
          field === "notification"
            ? ""
            : "capitalize",
        color: state.isSelected ? "var(--text-white)" : "var(--text-color)",
        backgroundColor: state.isSelected
          ? "var(--obsT_primary)"
          : "var(--section-card-bg)",
        borderBottom: "1px solid var(--border-color-50)",

        ":active": {
          backgroundColor: state.isSelected
            ? "var(--obsT_primary)"
            : "var(--section-card-bg)",
        },

        "&:hover": {
          backgroundColor: "var(--obsT_primary)",
          color: "var(--text-white)",
        },
      };
    },
    singleValue: (base) => ({
      ...base,
      color: "var(--text-color)",
    }),
    placeholder: (base) => ({
      ...base,
      color: "var(--placeholder-color)",
    }),
    input: (styles) => ({
      ...styles,
      '[type="text"]': {
        fontSize: "14px !important",
        color: "var(--text-color) !important",
      },
    }),
    menu: (base) => ({
      ...base,
      // override border radius to match the box
      borderRadius: 8,
      // kill the gap
      marginTop: 0,
      overflow: "hidden",
      backgroundColor: "var(--card-bg)",
      border: "1px solid var(--border-color-50)",
    }),
    menuList: (base) => ({
      ...base,
      // kill the white space on first and last option
      margin: "-2px",
      fontSize: "14px !important",
      padding: 0,
      color: "var(--text-color)",
      // borderColor: 'var(--border-color-50)',
      backgroundColor: "var(--card-bg)",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "#1DA1F2",
    }),
    indicatorSeparator: (base) => ({
      ...base,
      display: "none",
    }),
  };
};
