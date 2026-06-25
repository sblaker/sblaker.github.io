export default function BioSection() {
  return (
    <div className="bg-[#1C1C1C] p-6 rounded-3xl shadow-lg relative">
      <h2 className="text-2xl font-bold text-white mb-4">
        Formazione e Background
      </h2>
      <p className="text-gray-400 mb-4 leading-relaxed">
        Sono Antonino Trifirò, ingegnere informatico con una forte passione per la
        sicurezza informatica difensiva. Ho conseguito la laurea triennale in
        Ingegneria Informatica (L-8) all&apos;Università di Palermo e sto
        completando la magistrale in Ingegneria Informatica con specializzazione
        in Cybersecurity (LM-32), con laurea prevista a luglio 2026.
      </p>
      <p className="text-gray-400 mb-6 leading-relaxed">
        La mia tesi magistrale riguarda lo sviluppo di un sistema IDS per il
        rilevamento di attacchi zero-day tramite tecniche di Machine Learning e
        Deep Learning. Parallelamente ho costruito un SOC Home Lab con Wazuh SIEM
        per applicare le competenze Blue Team in un ambiente realistico.
      </p>

      <div className="mb-6">
        <h3 className="text-lg font-bold text-white mb-3">Competenze tecniche</h3>
        <div className="flex flex-wrap gap-2">
          {[
            'Wazuh SIEM', 'MITRE ATT&CK', 'Sysmon', 'Docker',
            'Python', 'Bash', 'Java', 'JavaScript',
            'Detection Engineering', 'Linux', 'Atomic Red Team',
          ].map((skill) => (
            <span
              key={skill}
              className="bg-[#00C2E8]/10 border border-[#00C2E8]/20 text-[#00C2E8] text-xs rounded-full px-3 py-1"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-white mb-2">Cosa cerco</h3>
        <p className="text-gray-400 leading-relaxed">
          Sto cercando opportunità come <span className="text-white font-medium">SOC Analyst L1</span> o
          in ruoli Blue Team. Ho costruito questo portfolio per dimostrare
          competenze pratiche — detection engineering, triage degli alert, simulazione
          di attacchi reali — non solo teoriche.
        </p>
      </div>
    </div>
  );
}
