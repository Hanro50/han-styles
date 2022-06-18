import { existsSync, readFileSync } from "fs";
import Express from "express";
import { join } from "path";
import { readFile } from "fs/promises";

const app = Express();
interface settings {
    port: number, versions: Array<string>
}
const settings: settings = JSON.parse(readFileSync("settings.json").toString());
app.get("/:version/:styles", async (req, res) => {
    if (!settings.versions.includes(req.params.version))
        return res.status(404).end();
    let result = ""
console.log(req.params.styles)
    for await (const value of req.params.styles.split(",")) {

        if (!value || value.includes(".."))
            return res.status(403).end();
        const dir = join(req.params.version, value + ".css");
        if (!existsSync(dir)) continue;
        result += `//${req.params.version}/${value}.css\n${(await readFile(dir)).toString()}\n`
    }
    res.type("css").send(result).end();
})

app.listen(settings.port)

console.log(`Listening on port ${settings.port}`)