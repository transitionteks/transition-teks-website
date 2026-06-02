
document.addEventListener("DOMContentLoaded", function () {
  const drawer = document.querySelector(".drawer");
  const openMenu = document.querySelector(".hamb");
  const closeMenu = document.querySelector(".close");

  if (openMenu && drawer) openMenu.addEventListener("click", () => drawer.classList.add("open"));
  if (closeMenu && drawer) closeMenu.addEventListener("click", () => drawer.classList.remove("open"));
  document.querySelectorAll(".drawer a").forEach((a) => a.addEventListener("click", () => drawer?.classList.remove("open")));

  const aiButton = document.querySelector(".ai-btn");
  const aiPanel = document.querySelector(".ai-panel");
  const aiClose = document.querySelector(".ai-close");
  const aiReply = document.querySelector(".ai-reply");

  const serviceAnswers = {
    school: {
      text: "For schools, I recommend starting with Accidental Damage Protection plus Asset Documentation. This helps track student devices, damage intake, repair status, and reporting.",
      link: "school-protection.html",
      label: "View School Protection"
    },
    data: {
      text: "For data security, start with Data Destruction & Data Sanitation. This is best before reuse, resale, recycling, or disposal of devices.",
      link: "data-destruction.html",
      label: "View Data Destruction"
    },
    oldtech: {
      text: "For old or unwanted technology, choose Asset Recovery if devices may still have value. Choose Junk Tech Removal if the priority is clearing space and disposal.",
      link: "asset-recovery.html",
      label: "View Asset Recovery"
    },
    onsite: {
      text: "For onsite help, book an Onsite Tech Consultation. This is best when you need someone to review devices, workflows, inventory, or technology planning in person.",
      link: "onsite-consultation.html",
      label: "View Onsite Consultation"
    },
    repair: {
      text: "For simple issues, choose Surface-Level Repairs. For deeper diagnostics, parts review, or longer troubleshooting, choose In-Depth Repairs.",
      link: "surface-repair.html",
      label: "View Repair Options"
    }
  };

  function setReply(key) {
    const answer = serviceAnswers[key];
    if (!answer || !aiReply) return;
    aiReply.innerHTML = `
      <strong>Recommendation:</strong><br>
      ${answer.text}
      <div class="ai-actions">
        <a href="${answer.link}">${answer.label}</a>
        <a href="contact.html">Contact Us</a>
      </div>
    `;
  }

  if (aiButton && aiPanel) {
    aiButton.addEventListener("click", function () {
      aiPanel.classList.toggle("open");
    });
  }

  if (aiClose && aiPanel) {
    aiClose.addEventListener("click", function () {
      aiPanel.classList.remove("open");
    });
  }

  document.querySelectorAll(".quick button").forEach((button) => {
    button.addEventListener("click", function () {
      setReply(button.dataset.service);
    });
  });
});
