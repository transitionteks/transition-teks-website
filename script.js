
document.addEventListener("DOMContentLoaded", function () {
  const drawer = document.querySelector(".drawer");
  document.querySelector(".hamb")?.addEventListener("click", () => drawer?.classList.add("open"));
  document.querySelector(".close")?.addEventListener("click", () => drawer?.classList.remove("open"));
  document.querySelectorAll(".drawer a").forEach((a) => a.addEventListener("click", () => drawer?.classList.remove("open")));

  const aiButton = document.querySelector(".ai-btn");
  const aiPanel = document.querySelector(".ai-panel");
  const aiClose = document.querySelector(".ai-close");
  const aiReply = document.querySelector(".ai-reply");

  const answers = {
    school: ["For schools, start with Accidental Damage Protection plus Asset Documentation. This helps track student devices, damage intake, repair status, and reporting.", "school-protection.html", "View School Protection"],
    data: ["For security, start with Data Destruction & Data Sanitation before reuse, resale, recycling, or disposal.", "data-destruction.html", "View Data Services"],
    oldtech: ["For old technology, use Asset Recovery when items may still have resale value. Use Junk Tech Removal when clearing space is the priority.", "asset-recovery.html", "View Asset Recovery"],
    onsite: ["For onsite help, book an Onsite Tech Consultation so we can review your devices, workflow, inventory, or repair needs.", "onsite-consultation.html", "View Consultation"],
    repair: ["For quick issues, choose 1-to-1 Surface Repairs. For deeper diagnostics, choose In-Depth Repairs.", "surface-repair.html", "View Repair Options"]
  };

  function reply(key) {
    if (!answers[key] || !aiReply) return;
    const [text, link, label] = answers[key];
    aiReply.innerHTML = `<strong>Recommendation:</strong><br>${text}<div class="ai-actions"><a href="${link}">${label}</a><a href="contact.html">Contact Us</a></div>`;
  }

  aiButton?.addEventListener("click", () => aiPanel?.classList.toggle("open"));
  aiClose?.addEventListener("click", () => aiPanel?.classList.remove("open"));
  document.querySelectorAll(".quick button").forEach((button) => button.addEventListener("click", () => reply(button.dataset.service)));
});
