// ============================================================
// MedVault — store da Agenda (editável, persistente em localStorage)
// Obs.: no protótipo a edição é local. Em produção, ligar a um
// backend compartilhado (ex.: Firebase) para edição colaborativa.
// ============================================================
(function () {
  const KEY = "mv_agenda_v1";
  let listeners = [];

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return window.MV.agenda.slice();
  }
  let items = load();

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(items)); } catch (e) {}
    listeners.forEach((fn) => fn(items));
  }

  const Store = {
    get: () => items.slice().sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time)),
    add: (it) => { items.push({ ...it, id: Date.now() }); save(); },
    update: (id, patch) => { items = items.map((x) => (x.id === id ? { ...x, ...patch } : x)); save(); },
    remove: (id) => { items = items.filter((x) => x.id !== id); save(); },
    reset: () => { items = window.MV.agenda.slice(); save(); },
    subscribe: (fn) => { listeners.push(fn); return () => { listeners = listeners.filter((f) => f !== fn); }; },
  };

  function useAgenda() {
    const [, setTick] = React.useState(0);
    React.useEffect(() => Store.subscribe(() => setTick((t) => t + 1)), []);
    return Store;
  }

  Object.assign(window, { MVAgendaStore: Store, useAgenda });
})();
