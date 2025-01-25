import os from "os";
const ni = os.networkInterfaces();
const localhost = Object.keys(ni)
    .map((interf) =>
        ni[interf].map((o) => !o.internal && o.family === "IPv4" && o.address)
    )
    .reduce((a, b) => a.concat(b))
    .filter((o) => o)[0];

export { localhost };