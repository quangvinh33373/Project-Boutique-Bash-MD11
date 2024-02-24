import React from "react";
import { View } from "react-native";


import ListOrder from "./ListOrder";

const Order = () => {
  const default_data = [
    {
      name: "Áo Sweater dài tay",
      image:
        "data:image/webp;base64,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",
      size: "L",
      color: "Đỏ",
      price: 200.000,
      number: 3,
    },
    {
      name: "Áo Sweater dài tay",
      image:
        "data:image/webp;base64,UklGRooHAABXRUJQVlA4WAoAAAAQAAAArwAArwAAQUxQSCcAAAABFyAQSFKffI2ICAczAZPcBKCZeFvK0itARP8n4ALWkLykT/3f3QIAVlA4IDwHAABwMwCdASqwALAAPt1iqk2opaQjKdU8wRAbiWUAz4YP/0PrMBi7mZtnD/ULTzna+rQIJwbPeTJrK+vMb0R8nL7HFlQ6MfdpYJV2YSr0ElQK7U4vXa55OJzg5yrdWQdEQU311eSAWu+g5J2fUVy6SVpKMR7+YxwR9QFa9k2Nij/GEpLU/7Sz3OjeecoANZw3hS6rC0Wn+i4mN5Z9LY9bMOhoqaficsRtZvcjc08opDzelNIvtAp03M5TtLjR9Qlsj2OS9JimosZ3W3rzp5aiv+V2E7ts0p6cuX3xn5xKMBaO7zuJenAlvCmhedaQzOVMWEwlf/bjEVZVRo6rye5IfH2qTPFlAxi3MLo86A0DXPOo6TxtZ0WW+1jTjwXsradDH9eSA1ZlZjnzBF8Owts3wbKyyWwUOp1qE9nRuQh/B4h0q4ir15nyQ1m+wUEPr7hLukdbmJ+E52x6UhKhXsmElqaStgF507nNKaaMldx18ofGWErUqXHSGYRQOLqlTfurX3gg89gtW1R/NGQnVJEtv/XCl2E6x5G/SU3vMxchnp0g+F8QPQAA/ud2mVuVbv8JchwTDXiDG1QuzT9iEeNRlOqnCgeDcOfEI3upNUp+yo7B63eYzRQw5dKIeAsu+ug/Oq3QVG8MSIHPq+oLVHgQ5ztHDm9Gjxrg/ElkzcajBTGsnv9NuhbYshj/U4HxPB9S0c0PMHSOxnTjbKNmfCkhTcu98EP+XrzaSbwfhTcSzVaVnkggOSPcPdk9pbLcbw/jt3pnMCF0YeFi9MBPuG1Xd6Wh4NiomWBaul2ljw7JIBjQ0bXvvjOnzsaogwgwdS8/Aia2wDap8dTwveQJtihyjpTDPh3+D+UTfbfnvINP4GJBtAGNOMdZsm5N5xo0MsFzY6KJbfsNzn5JEbkCR4PiXp8hfe405akhD8Do3lOChrU8VswDLziATlroxZnZrmp/CAQiTADpjyL33MSqqOgYMHso1Xiy+bIKiUA9V9vEdGJc2puFrS/f1HwoH8l9mH5yGMrCf1u4vzsE1qlRM5acL7YHDH+g9j8lT1OGRqlfFRhX8VsC30p6TR8gkvcc8e9RkzQeiEo22v74Aq2OnqBwNQ2KHYSfNFUkaCmhDkrj+kubnLKtYCCVqBCkXWFA5WhoWbSqopwZHe9yVcAQPNygSxRVQFkdaSKWhieGi1vIYKXIeLklA/N8HskbbAbqVZBaS5y4I1ziRz+KxPToBrpoLxz2FbhwAKGgP3Xe1xgd0xRgEWPxx2Yauk4Ul8TAAzWjpJifQrO7eAddnQ0OvHLhsi6MLD2euylv7FSaf3yT6Gmb71eJHFUwF1xJT/jU79tscVQE5jGX0bj6iVXkdPHLgGWFucYq1TN/iM38r/NtR1iHQ8bnlkx7Kjpb+MuUPqr6RLQeughwRpKSv6NKBKlbsti5W5ncc7Wclsn7ADpWU3qZbDZ3yTXA0hz7KQ8Zd01ovHAHdNsam6ysUz50cu64qD2s0YmsQmbP4TRGfUyjZTwEUdNVYw7lpc4k/tZHoE5pTXAi+1yO4XH0zQ1hY+J2yNfARo5OUZ19ZYD63QLpeHrXtYf9DwjYjhHviwSQeOVHwe7jOHTaprQjOplnY0duExrtByBa7eNzyKGsBuxBGeaV33WZyMZRKYarTruM3JVG2rlwMHkaEd0LATm3sAioMXMTS/PFZnL4+0IEyFpSB6DZ3s+m8zVGdbntEgTNbVvCCLHF/kmXZ4FEpoiPLUaPUEo5QkBFrmn+rWu7Am5B7KVRGOa+se7Ew3476yTJb1lwbkg1/PDOggBMDZY4jxPv59nKsOIM1OB5B9+hx9KL1s+pU/M0Y+FlrGtq8A82cCEH0UKgTLyWuuCxilCPMG0vGeufATUCME20Qgk8i190wdO+Ag6f9h6iGgyollpYQzcr7QeehINEcUxcRVPvygsQbyMbj+966hnL75enwTyNj7f+3SAtp6PIG1PHw4vsnTxaxzxY3F4q3s8o3v1rtUmvthe52L0ovL/YgF85OkrEySLll0ZLM7KC9vFXtyMgYP3oIAbLMKsbNAKGzH0LvJc7tHCXezODQJrBxhArla6pJkxiZcMKELfAnCLwIFhRqZ2ARYfD7VCY4cds0mJmHOSA166OsiEyrzT8wVOdXLPMgVBXVZP+8zIaLuPK5+ITgt5zb7lak4/UEBKCLqFKJdt5F2RM1GvoZlC+3oM+bik9OOIesQjzFw+R6D781UhdCRpJUEUn84WW7mMpyOJrasrzuvs5UlNH9Z6zYy0kDqj4s05KlJKm3uwNVnjGtbzBuicvzJEnk8opnfla6PFJEI+bocVSZ9X5XhQiPPy9SvXmC8Hm8kMPDaYbIf4TqLbwQ6Hcamf1SPF3E/JXBQ5usF0KO0q81Gsa8ih68T+ycKI4ULD5ORsjPkcjssg1b+BkBQsMEQGY9H1J6ApjHGGuzlrUACoIIxJPnlkoI/wAAAAA",
      size: "L",
      color: "Đỏ",
      price: 200.000,
      number: 3,
    },
  ];
  return (
  <View>
     <ListOrder data={default_data}/>
  </View>
  );
};
export default Order;
