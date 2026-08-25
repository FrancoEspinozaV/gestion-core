import { useState } from "react";
import { parseRaidData } from "../utils/raidParser";
import { raidService } from "../services/service";

export const RaidImporter = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleImport = async () => {
    try {
      setError("");

      const raidData = parseRaidData(value);

      await raidService.createRaid(
        raidData.instance,
        raidData.date,
        raidData.players,
      );

      setValue("");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  };

  return (
    <div>
      <textarea
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Pega aquí los datos exportados por el addon..."
      />

      <button onClick={handleImport}>
        Importar raid
      </button>

      {error && <p>{error}</p>}
    </div>
  );
};