const projectData = {
  xuhui: {
    kicker: "AI WORKFLOW · MULTIMODAL AIGC · ART PRODUCTION",
    title: "徐汇数字街区",
    subtitle: "From visual production to a redesignable AIGC workflow",
    body: `
      <div class="case-hero">
        <figure class="case-image">
          <img class="case-thumb map-thumb" src="assets/xuhui/web/after-display.webp" alt="徐汇数字街区修改后像素地图" data-full="assets/xuhui/web/after-full.webp">
          <figcaption>FINAL / ITERATED VISUAL OUTPUT</figcaption>
        </figure>
        <div class="case-hero-copy">
          <p class="case-lead">一个真实、持续迭代的数字美术项目，也成为我第一次系统拆解 AIGC 生产 Workflow 的实践。</p>
          <p>项目需要根据老师的反馈反复调整大型像素街区地图。我负责地图制作、视觉迭代和 AI 辅助生成，并进一步把其中高频、机械、可自动化的步骤拆出来重新设计。</p>
          <div class="case-stat-grid">
            <div class="case-stat"><span>ROLE</span><b>Visual Production / Workflow Design</b></div>
            <div class="case-stat"><span>TOOLS</span><b>Tiled · Photoshop · GPT · Python</b></div>
            <div class="case-stat"><span>AI MODE</span><b>Multimodal Image Editing</b></div>
            <div class="case-stat"><span>OUTPUT</span><b>Pixel-art Digital District</b></div>
          </div>
        </div>
      </div>

      <section class="case-section">
        <h4>01 · 从模糊反馈到可执行约束</h4>
        <p>真实反馈往往不是模型可以直接稳定执行的技术描述。我的第一步是把主观的视觉判断拆成更明确的生成约束。</p>
        <div class="case-grid-2">
          <figure class="case-image">
            <img class="case-thumb" src="assets/xuhui/web/feedback-display.webp" alt="老师对徐汇项目的真实反馈" data-full="assets/xuhui/web/feedback-full.webp">
            <figcaption>REAL FEEDBACK FROM THE PROJECT</figcaption>
          </figure>
          <div class="constraint-list">
            <div class="constraint-row"><div class="raw">“有点厚重”</div><div class="arrow">→</div><div class="mapped">降低细节密度 · 减少色位 · 增加视觉留白</div></div>
            <div class="constraint-row"><div class="raw">“缺少游戏性的轻松感”</div><div class="arrow">→</div><div class="mapped">更轻快的色彩 · 简化植被 · 更清晰的轮廓</div></div>
            <div class="constraint-row"><div class="raw">“二维像素游戏感”</div><div class="arrow">→</div><div class="mapped">硬边像素 · 低色位 · 正交构图 · 控制透视</div></div>
          </div>
        </div>
      </section>

      <section class="case-section">
        <h4>02 · Visual Iteration</h4>
        <p>目标不是单纯“生成一张更漂亮的图”，而是在保留地标识别度的前提下，让整个街区从偏厚重的视觉语言转向更轻快、低细节、可读性更强的游戏地图风格。</p>
        <div class="before-after">
          <div class="compare-card">
            <img class="case-thumb map-thumb" src="assets/xuhui/web/before-display.webp" alt="徐汇地图修改前" data-full="assets/xuhui/web/before-full.webp">
            <div class="compare-label"><span>BEFORE</span><span>denser / heavier</span></div>
          </div>
          <div class="compare-card after">
            <img class="case-thumb map-thumb" src="assets/xuhui/web/after-display.webp" alt="徐汇地图修改后" data-full="assets/xuhui/web/after-full.webp">
            <div class="compare-label"><span>AFTER</span><span>lighter / game-readable</span></div>
          </div>
        </div>
      </section>

      <section class="case-section">
        <h4>03 · 我发现瓶颈不只在 AI 生成</h4>
        <p class="case-lead">真正拖慢迭代的，是 AI 前后大量重复的人工处理。</p>
        <div class="case-grid-2">
          <figure class="case-image">
            <img class="case-thumb" src="assets/xuhui/web/tiled-display.webp" alt="Tiled 地图编辑工作界面" data-full="assets/xuhui/web/tiled-full.webp">
            <figcaption>TILED / LAYOUT EDITING</figcaption>
          </figure>
          <figure class="case-image">
            <img class="case-thumb" src="assets/xuhui/web/photoshop-display.webp" alt="Photoshop 长图处理工作界面" data-full="assets/xuhui/web/photoshop-full.webp">
            <figcaption>PHOTOSHOP / LONG IMAGE HANDLING</figcaption>
          </figure>
        </div>
        <div class="workflow-note">Current pain point → 修改布局之后仍需手动导出、切图、命名、逐段交给 AI、保存结果、检查并重新拼接。生成本身只是整条生产链中的一个节点。</div>
      </section>

      <section class="case-section">
        <h4>04 · Human × AI × Script</h4>
        <p>我把现有流程按“需要判断的工作 / 适合生成模型的工作 / 可以确定性自动化的工作”重新划分，而不是把所有步骤都强行交给 AI。</p>
        <div class="swimlane lane-human">
          <div class="lane-label">HUMAN</div>
          <div class="lane-flow"><span class="lane-node">理解反馈</span><span class="lane-arrow">→</span><span class="lane-node">调整布局</span><span class="lane-arrow">→</span><span class="lane-node">视觉审核</span></div>
        </div>
        <div class="swimlane lane-ai">
          <div class="lane-label">AI</div>
          <div class="lane-flow"><span class="lane-node">参考图理解</span><span class="lane-arrow">→</span><span class="lane-node">图像修改</span><span class="lane-arrow">→</span><span class="lane-node">风格补全</span></div>
        </div>
        <div class="swimlane lane-script">
          <div class="lane-label">SCRIPT</div>
          <div class="lane-flow"><span class="lane-node">Split</span><span class="lane-arrow">→</span><span class="lane-node">Naming</span><span class="lane-arrow">→</span><span class="lane-node">Validate</span><span class="lane-arrow">→</span><span class="lane-node">Merge</span></div>
        </div>
      </section>

      <section class="case-section">
        <h4>05 · Multimodal AIGC in Practice</h4>
        <div class="case-grid-2">
          <figure class="case-image">
            <img class="case-thumb" src="assets/xuhui/web/ai-display.webp" alt="GPT 多模态 AI 输入和图像生成过程" data-full="assets/xuhui/web/ai-full.webp">
            <figcaption>REFERENCE IMAGES + NATURAL LANGUAGE CONSTRAINTS + ORIGINAL IMAGE</figcaption>
          </figure>
          <div>
            <p class="case-lead">AI 被放进现有生产 Pipeline，而不是作为一次性的“生图按钮”。</p>
            <p>输入包含原图、视觉参考与具体约束；输出仍由人工根据建筑保真度、构图、色位、透视和整体风格进行 QA，不合格的局部重新生成。</p>
            <div class="flow-row"><span>Original</span><b>+</b><span>References</span><b>+</b><span>Constraints</span><b>→</b><span>Generate</span><b>→</b><span>Human QA</span></div>
          </div>
        </div>
      </section>

      <section class="case-section">
        <h4>06 · Automation Prototype</h4>
        <p class="case-lead">Xuhui Image Pipeline V0.1</p>
        <p>为了把最稳定、最重复的机械环节移出人工流程，我做了一个轻量 Python 工具。它已经可以实际运行，而不是概念原型。</p>
        <figure class="case-tool">
          <img class="case-thumb" src="assets/xuhui/web/pipeline-display.webp" alt="Xuhui Image Pipeline V0.1 实际运行截图" data-full="assets/xuhui/web/pipeline-full.webp">
          <figcaption>WORKING PROTOTYPE / TESTED WITH A 5760 × 576 PRODUCTION IMAGE</figcaption>
        </figure>
        <div class="tool-badges"><span>SPLIT</span><span>AUTO NAMING</span><span>VALIDATE</span><span>MERGE</span></div>
        <p>测试中，5760 × 576 的生产图被自动切成 3 张 1920 × 576 分段图；AI 修改后可重新选择结果进行尺寸 / 模式校验与横向拼接。</p>
      </section>

      <section class="case-section">
        <h4>07 · Redesigned Workflow</h4>
        <div class="flow-row">
          <span>Teacher Feedback</span><b>→</b><span>Requirement Translation</span><b>→</b><span>Tiled</span><b>→</b><span>Master Export</span><b>→</b><span>Pipeline: Split + Naming</span><b>→</b><span>Multimodal AI</span><b>→</b><span>Human QA</span><b>→</b><span>Pipeline: Validate + Merge</span><b>→</b><span>Deliver</span>
        </div>
        <div class="case-note">当前阶段没有强行加入 Agent：流程规则稳定、视觉审核仍高度依赖人工判断，因此 Workflow + deterministic automation 更合适。Agent 只有在未来任务规模、素材路由和并行状态管理显著增加时才值得评估。</div>
      </section>

      <section class="case-section">
        <h4>08 · Next Iteration · Measurement Plan</h4>
        <p>下一阶段将建立人工流程 baseline，并在后续真实修改任务中记录同一组指标，对比自动化前后的处理成本。这里先定义验证方法，待有足够真实样本后再展示结果。</p>
        <div class="metric-grid">
          <div class="metric-card"><b>Iteration Time</b><span>单轮修改总耗时</span></div>
          <div class="metric-card"><b>Manual Operations</b><span>人工机械操作次数</span></div>
          <div class="metric-card"><b>Generation Attempts</b><span>平均 AI 生成次数</span></div>
          <div class="metric-card"><b>First-pass Acceptance</b><span>AI 一次通过率</span></div>
          <div class="metric-card"><b>Rework Rate</b><span>返工比例</span></div>
          <div class="metric-card"><b>Review Time</b><span>人工视觉审核时间</span></div>
        </div>
      </section>
    `
  },
  alien: {
    kicker: "GAME PRODUCT · CONTENT PIPELINE · AI-ASSISTED DEVELOPMENT",
    title: "Alien Bar",
    subtitle: "From playable prototype to a data-driven content pipeline",
    body: `
      <div class="alien-case-hero">
        <div class="alien-hero-media">
          <video autoplay muted loop playsinline preload="metadata" poster="assets/alien/card.jpg">
            <source src="assets/alien/hero-loop.mp4" type="video/mp4">
          </video>
          <span class="video-badge">PLAYABLE PROTOTYPE</span>
        </div>
        <div class="case-hero-copy">
          <p class="case-lead">一个以“理解外星顾客需求并自由调酒”为核心体验的可玩原型，也让我第一次把游戏内容从逐个配置，转成可批量生成的数据驱动流程。</p>
          <p>项目来自腾讯 AI 游戏黑客松。我参与玩法规则、交互、评分逻辑与 Unity 落地；在材料数量增加后，又把“生产一种新酒所需要的信息”结构化到 CSV，通过脚本批量生成 Prefab，减少重复配置。</p>
          <div class="case-stat-grid">
            <div class="case-stat"><span>ROLE</span><b>Game Design / Unity Development</b></div>
            <div class="case-stat"><span>FOCUS</span><b>Content Pipeline / System Design</b></div>
            <div class="case-stat"><span>PLATFORM</span><b>PC / VR / WebGL</b></div>
            <div class="case-stat"><span>TOOLS</span><b>Unity / C# / CSV / GPT</b></div>
          </div>
        </div>
      </div>

      <section class="case-section">
        <p class="case-eyebrow">01 · CORE EXPERIENCE</p>
        <h4>先做出一个可以完整体验的调酒闭环</h4>
        <p>玩家读取顾客的偏好与忌口，自由选择容器和材料，通过实际操作完成饮品，再交付给顾客获得评分反馈。调酒过程本身被保留为核心交互，而不是压缩成菜单中的“选择配方”。</p>
        <div class="alien-loop">
          <div><span>01</span><b>READ</b><small>顾客需求 / 忌口</small></div>
          <i>→</i>
          <div><span>02</span><b>CREATE</b><small>容器 / 材料 / 操作</small></div>
          <i>→</i>
          <div><span>03</span><b>SERVE</b><small>交付饮品</small></div>
          <i>→</i>
          <div><span>04</span><b>FEEDBACK</b><small>评分 / 结果</small></div>
        </div>
        <div class="video-panel">
          <video controls playsinline preload="metadata" poster="assets/alien/gameplay-poster.jpg">
            <source src="assets/alien/gameplay.mp4" type="video/mp4">
          </video>
          <div class="video-copy"><b>功能与操作说明</b><span>保留原项目演示视频作为可玩性证据。画面较早期，但能完整展示实际运行与交互。</span></div>
        </div>
      </section>

      <section class="case-section">
        <p class="case-eyebrow">02 · PRODUCTION PROBLEM</p>
        <h4>当内容数量增加，问题不再只是“做出一瓶酒”</h4>
        <p class="case-lead">真正需要标准化的，是游戏系统认识一种新内容所需要的信息。</p>
        <p>原型早期可以在 Unity 中逐个建立和配置内容；但酒类、材料和模型增加后，每新增一种内容都要重复填写属性、关联资源并创建 Prefab。继续靠手工操作，会让扩充内容本身变成生产瓶颈。</p>
        <div class="before-after process-compare">
          <div class="compare-card">
            <div class="compare-label"><b>MANUAL</b><span>逐个配置</span></div>
            <div class="manual-flow"><span>Create</span><i>→</i><span>Configure</span><i>→</i><span>Link Asset</span><i>→</i><span>Save</span><i>→</i><span>Repeat</span></div>
          </div>
          <div class="compare-card after">
            <div class="compare-label"><b>PIPELINE</b><span>结构化生产</span></div>
            <div class="manual-flow"><span>Define</span><i>→</i><span>Generate</span><i>→</i><span>Validate</span></div>
          </div>
        </div>
      </section>

      <section class="case-section">
        <p class="case-eyebrow">03 · CONTENT SCHEMA</p>
        <h4>先定义“新内容需要哪些信息”，再考虑怎么自动生成</h4>
        <div class="case-grid-2 alien-schema-grid">
          <figure class="case-image">
            <img class="case-thumb" src="assets/alien/csv.png" alt="Alien Bar CSV 内容表格" data-full="assets/alien/csv.png">
            <figcaption>REAL PROJECT CSV / CONTENT DEFINITIONS</figcaption>
          </figure>
          <div>
            <p>CSV 将原本散落在手工配置过程中的信息集中成统一结构。根据保留的项目资料，可以明确看到内容标识、文本描述、数值/表现信息以及 Unity 资源路径等数据被放到同一条定义中。</p>
            <div class="schema-list">
              <div><span>IDENTITY</span><b>内容标识 / 名称 / 描述</b></div>
              <div><span>GAME DATA</span><b>游戏需要读取的属性与数值</b></div>
              <div><span>PRESENTATION</span><b>颜色等表现信息</b></div>
              <div><span>ASSET REFERENCE</span><b>模型 / Prefab 资源路径</b></div>
            </div>
            <div class="workflow-note"><b>关键判断：</b>CSV 不是目的。真正重要的是先定义稳定的数据结构，让新增内容满足同一套输入规则。</div>
          </div>
        </div>
      </section>

      <section class="case-section">
        <p class="case-eyebrow">04 · CSV → PREFAB PIPELINE</p>
        <h4>把重复配置转换成“维护数据 → 批量生成资产”</h4>
        <div class="pipeline-diagram alien-pipeline">
          <div class="pipeline-node primary"><small>STRUCTURED INPUT</small><b>CSV</b><span>Content definitions</span></div>
          <i>→</i>
          <div class="pipeline-node"><small>DETERMINISTIC SCRIPT</small><b>Generator</b><span>Parse / create / configure</span></div>
          <i>→</i>
          <div class="pipeline-node primary"><small>UNITY OUTPUT</small><b>Prefabs</b><span>Reusable game content</span></div>
          <i>→</i>
          <div class="pipeline-node"><small>CONSUMED BY</small><b>Game Systems</b><span>Interaction / scoring</span></div>
        </div>
        <figure class="case-tool alien-unity-shot">
          <img class="case-thumb" src="assets/alien/unity.png" alt="Alien Bar Unity 工程与 Prefab" data-full="assets/alien/unity.png">
          <figcaption>UNITY PROJECT / GENERATED INGREDIENT CONTENT</figcaption>
        </figure>
        <p class="case-note">当前保留版本主要证明的是“根据结构化数据批量生成内容”。我不把它描述成完整内容后台，也不假设当时已经具备完善的双向同步或批量修改能力。</p>
      </section>

      <section class="case-section">
        <p class="case-eyebrow">05 · RULE SYSTEM</p>
        <h4>自由调酒以后，系统还需要知道“做得好不好”</h4>
        <p>评分逻辑把玩家实际交付的容器与材料，与顾客偏好、需求和忌口一起纳入判断。普通偏好属于软匹配，而忌口属于更高优先级的硬约束。</p>
        <div class="rule-map">
          <div class="rule-source"><small>PLAYER OUTPUT</small><b>Container + Ingredients + Actions</b></div>
          <div class="rule-plus">+</div>
          <div class="rule-source"><small>CUSTOMER</small><b>Preferences + Restrictions</b></div>
          <div class="rule-arrow">→</div>
          <div class="rule-score"><small>RULE EVALUATION</small><b>SCORE / FEEDBACK</b></div>
        </div>
        <div class="rule-priority"><span>SOFT</span><b>偏好匹配影响得分</b><i>→</i><span>HARD</span><b>触发忌口时优先判定失败 / 0 分</b></div>
      </section>

      <section class="case-section">
        <p class="case-eyebrow">06 · HUMAN × AI × SCRIPT</p>
        <h4>不是所有自动化问题都应该交给生成式 AI</h4>
        <div class="swimlane alien-lanes">
          <div class="lane-label lane-human">HUMAN</div><div class="lane-flow"><span class="lane-node">玩法判断</span><span class="lane-arrow">→</span><span class="lane-node">Schema 定义</span><span class="lane-arrow">→</span><span class="lane-node">体验验收</span></div>
          <div class="lane-label lane-ai">AI</div><div class="lane-flow"><span class="lane-node">实现方案探索</span><span class="lane-arrow">→</span><span class="lane-node">代码辅助 / Debug</span><span class="lane-arrow">→</span><span class="lane-node">内容探索</span></div>
          <div class="lane-label lane-script">SCRIPT</div><div class="lane-flow"><span class="lane-node">CSV Parsing</span><span class="lane-arrow">→</span><span class="lane-node">Prefab Generation</span><span class="lane-arrow">→</span><span class="lane-node">稳定重复执行</span></div>
        </div>
        <p class="workflow-note">规则明确、需要重复执行的步骤，更适合确定性程序；AI 更适合未知问题、实现探索和快速原型。这个项目让我开始有意识地区分两者。</p>
      </section>

      <section class="case-section">
        <p class="case-eyebrow">07 · SCALABILITY / NEXT STEP</p>
        <h4>如果内容从几十种增长到 500 种，CSV 本身也会成为新的瓶颈</h4>
        <p>当前 Pipeline 解决了“重复创建 Prefab”的问题，但并没有解决大规模内容运营。随着策划频繁增删改内容，直接在长表格里人工检索、辨认复杂名称和维护版本会越来越困难。</p>
        <div class="future-grid">
          <div><span>01</span><b>更适合策划的内容界面</b><p>支持搜索、筛选、分类与缩略图，不要求使用者理解复杂资源命名。</p></div>
          <div><span>02</span><b>从 Generate 扩展到 Update</b><p>识别已有内容并更新，而不是每次只生成新的 Prefab。</p></div>
          <div><span>03</span><b>AI 作为编辑入口，而不是最终执行者</b><p>允许自然语言描述批量修改意图，再转换为结构化变更，并经过校验与确认后写入数据。</p></div>
        </div>
        <p class="case-note">这一部分是基于现有原型的后续产品化思考，尚未在原项目中实现。</p>
      </section>
    `
  },

  cat: {
    kicker: "RAPID PROTOTYPING · INTERACTION DESIGN · DESKTOP PRODUCT",
    title: "CatYarnOverlay",
    subtitle: "From a classroom experiment to a configurable desktop product in 48 hours",
    body: `
      <div class="cat-case-hero">
        <div class="cat-hero-media">
          <video autoplay muted loop playsinline preload="metadata" poster="assets/cat/video-poster.jpg">
            <source src="assets/cat/hero-loop.mp4" type="video/mp4">
          </video>
          <span class="video-badge">WORKING WINDOWS PROTOTYPE</span>
        </div>
        <div class="case-hero-copy">
          <p class="case-lead">一个 Processing 课堂实验，在两天内被推进成了真正覆盖在 Windows 桌面上的可配置桌宠。</p>
          <p>第一天我先验证“猫追鼠标、拖出毛线、长按积蓄更大的毛线球”是否有趣；当天晚上开始迁移到 WPF，第二天下午整体完成度已经接近当前版本。之后继续补充动画、设置、快捷键、音频与产品展示。</p>
          <div class="case-stat-grid">
            <div class="case-stat"><span>ROLE</span><b>Independent Product / Design & Development</b></div>
            <div class="case-stat"><span>SPEED</span><b>Core product in ~48 hours</b></div>
            <div class="case-stat"><span>PROTOTYPE</span><b>Processing → WPF</b></div>
            <div class="case-stat"><span>FOCUS</span><b>Interaction Feel / Desktop UX</b></div>
          </div>
        </div>
      </div>

      <section class="case-section">
        <p class="case-eyebrow">01 · DAY 1 / THE EXPERIMENT</p>
        <h4>先验证一个很小的问题：这只猫值不值得被反复逗？</h4>
        <div class="case-grid-2 cat-origin-grid">
          <figure class="case-image">
            <img class="case-thumb" src="assets/cat/processing.png" alt="CatYarnOverlay Processing 初始实验画面" data-full="assets/cat/processing.png">
            <figcaption>PROCESSING CLASS PROTOTYPE / DAY 1</figcaption>
          </figure>
          <div>
            <p>最初版本没有复杂产品结构，只验证几个核心反馈：猫平滑追随鼠标、运动留下彩色毛线、按住鼠标积蓄更大的毛线球、松开时产生夸张 burst。</p>
            <div class="cat-core-actions">
              <div><b>MOVE</b><span>Cat follows the cursor</span></div>
              <div><b>HOLD</b><span>Charge a larger yarn ball</span></div>
              <div><b>RELEASE</b><span>Burst + recoil feedback</span></div>
              <div><b>TRACE</b><span>Leave persistent yarn trails</span></div>
            </div>
            <div class="workflow-note"><b>Prototype question:</b> 不是先做一个完整桌宠，而是先确认最基础的鼠标互动本身是否足够有趣。</div>
          </div>
        </div>
      </section>

      <section class="case-section cat-play-section">
        <p class="case-eyebrow">02 · TRY THE ORIGINAL IDEA</p>
        <h4>把 Day 1 的核心交互直接放进作品集</h4>
        <p>下面是依据原始 Processing 代码重新实现的轻量 Web 版本，只保留核心体验，不尝试把完整 WPF 桌面功能搬进浏览器。</p>
        <div class="cat-demo-shell">
          <div class="cat-demo-toolbar"><span>PROCESSING PROTOTYPE · WEB RECREATION</span><button type="button" id="catDemoClear">Clear yarn</button></div>
          <canvas id="catDemoCanvas" width="900" height="500" aria-label="CatYarnOverlay interactive prototype"></canvas>
          <div class="cat-demo-hint"><span>MOVE</span> move cursor · <span>HOLD</span> grow yarn · <span>RELEASE</span> burst · <span>C</span> clear</div>
        </div>
        <p class="case-note">Web demo 是对原始 Processing 交互逻辑的轻量翻译；完整桌面版包含更多运行设置、快捷键与桌面集成功能。</p>
      </section>

      <section class="case-section">
        <p class="case-eyebrow">03 · 48-HOUR BUILD</p>
        <h4>验证有趣以后，立即把“课堂窗口”改造成真正的桌面产品</h4>
        <div class="cat-timeline">
          <div class="cat-time"><span>DAY 1 · CLASS</span><b>Processing</b><p>快速完成核心交互实验。</p></div><i>→</i>
          <div class="cat-time"><span>DAY 1 · NIGHT</span><b>Desktop Migration</b><p>开始迁移到 Windows / WPF，处理透明 Overlay 与桌面交互。</p></div><i>→</i>
          <div class="cat-time highlight"><span>DAY 2 · AFTERNOON</span><b>Working Prototype</b><p>猫、毛线轨迹、毛线球、动画与核心设置已经形成接近当前版本的完整体验。</p></div>
        </div>
        <figure class="case-tool cat-desktop-shot"><img class="case-thumb" src="assets/cat/desktop.png" alt="CatYarnOverlay 实际覆盖在 Windows 桌面上" data-full="assets/cat/desktop.png"><figcaption>REAL DESKTOP ENVIRONMENT / THE PET COEXISTS WITH OTHER WINDOWS</figcaption></figure>
      </section>

      <section class="case-section">
        <p class="case-eyebrow">04 · FROM “FEEL” TO PARAMETERS</p>
        <h4>不寻找唯一正确的手感，而是把差异变成可控制的参数</h4>
        <div class="case-grid-2 cat-settings-grid">
          <figure class="case-image"><img class="case-thumb" src="assets/cat/settings.png" alt="CatYarnOverlay 动画与运行设置界面" data-full="assets/cat/settings.png"><figcaption>CONFIGURABLE ANIMATION + RUNTIME SETTINGS</figcaption></figure>
          <div>
            <p class="case-lead">“太飘”“没劲”“太闹”本质上不是一个参数。随着迭代，我把这些主观反馈拆成能够独立调整的变量，并把其中有意义的差异开放给用户。</p>
            <div class="parameter-grid"><div><span>CHARGE</span><b>10 s</b><small>长按达到最大效果</small></div><div><span>LIFT</span><b>-4.5</b><small>点击上抬速度</small></div><div><span>BOUNCE</span><b>0.12</b><small>回弹幅度</small></div><div><span>DAMPING</span><b>0.80</b><small>运动衰减</small></div></div>
            <div class="cat-spectrum"><span>SUBTLE</span><div class="spectrum-line"><i></i></div><span>EXAGGERATED</span></div>
            <p>如果不同用户偏好明显不同，与其替所有人选一个“平衡值”，更合理的产品方向是提供 Preset / Custom，让安静陪伴和夸张互动都能存在。</p>
          </div>
        </div>
      </section>

      <section class="case-section">
        <p class="case-eyebrow">05 · DESIGNING FOR THE DESKTOP</p>
        <h4>桌宠不是一局游戏，它必须长期和用户真正的工作环境共存</h4>
        <div class="desktop-principles"><div><span>01</span><b>VISIBLE, NOT INTRUSIVE</b><p>始终有存在感，但不能持续阻挡用户操作。</p></div><div><span>02</span><b>RESPONSIVE, NOT DEMANDING</b><p>用户主动碰它时反馈明确，不要求持续完成任务。</p></div><div><span>03</span><b>CUSTOMIZABLE</b><p>大小、跟随、轨迹与动画强度可以适应不同桌面习惯。</p></div></div>
        <div class="video-panel cat-video-panel"><video controls playsinline preload="metadata" poster="assets/cat/video-poster.jpg"><source src="assets/cat/desktop-demo.mp4" type="video/mp4"></video><div class="video-copy"><b>Current desktop build</b><span>真实桌面实机录像。完整版本包含运行设置、动画控制、快捷键以及更多桌面功能。</span></div></div>
      </section>

      <section class="case-section">
        <p class="case-eyebrow">06 · FROM PROTOTYPE TO PRODUCT</p>
        <h4>当它不再只是作业，就开始需要考虑别人为什么会下载它</h4>
        <div class="case-grid-2 cat-product-grid">
          <figure class="case-image promo-poster-frame"><img class="case-thumb" src="assets/cat/promo-poster.png" alt="CatYarnOverlay 开拓芯宣传物料" data-full="assets/cat/promo-poster.png"><figcaption>PRODUCT / DISTRIBUTION EXPLORATION</figcaption></figure>
          <div><p>后续我参加了开拓芯并制作产品宣传物料，也开始探索 Steam 发布、低门槛定价与可扩展内容。这里展示的是产品化探索，而不是声称已经完成正式发行。</p><div class="product-message"><small>VALUE PROPOSITION</small><b>“别工作了，猫来了。”</b><span>宣传物料不再解释技术实现，而是直接表达桌面陪伴、摸鱼与轻互动的价值。</span></div><video class="cat-promo-video" controls playsinline preload="metadata"><source src="assets/cat/promo.mp4" type="video/mp4"></video></div>
        </div>
      </section>

      <section class="case-section">
        <p class="case-eyebrow">07 · NEXT VALIDATION</p>
        <h4>下一步不是继续堆功能，而是验证不同用户究竟想要哪一种“猫”</h4>
        <p>目前大量手感判断仍来自自己的高频使用。下一阶段更值得验证的是：用户是否会形成稳定的配置偏好，以及这些偏好是否足以形成预设模式。</p>
        <div class="metric-grid"><div class="metric-card"><b>Interaction Mix</b><span>Click / Hold / Drag 等行为占比</span></div><div class="metric-card"><b>Close / Hide</b><span>桌宠是否造成打扰</span></div><div class="metric-card"><b>Preset Choice</b><span>Playful / Calm / Custom 偏好</span></div><div class="metric-card"><b>Return Use</b><span>第二天是否仍愿意打开</span></div></div>
        <div class="case-note">一个可能的结果不是选出单一“最佳参数”，而是发现不同使用场景需要不同体验强度，再让数据反过来决定默认 Preset 与设置层级。</div>
      </section>
    `
  },

  fitness: {
    kicker: "AI PRODUCT CONCEPT · UX · FIGMA",
    title: "智体",
    subtitle: "从健康记录到 AI 辅助决策的产品概念",
    body: `
      <section class="fitness-case-hero">
        <div class="fitness-phone-pair">
          <figure><img class="case-thumb" src="assets/fitness/home.png" data-full="assets/fitness/home.png" alt="智体首页原型"><figcaption>HOME / DAILY OVERVIEW</figcaption></figure>
          <figure><img class="case-thumb" src="assets/fitness/tracking.png" data-full="assets/fitness/tracking.png" alt="智体饮食记录原型"><figcaption>TRACKING / FOOD LOG</figcaption></figure>
        </div>
        <div class="fitness-hero-copy">
          <p class="case-lead">一次团队 UX 课程项目：尝试把分散的饮食、运动与身体状态记录，组织成更连续的健康管理体验，并探索 AI 在“理解状态 → 给出建议 → 推动行动”中的产品位置。</p>
          <div class="case-stat-grid"><div class="case-stat"><span>MY SCOPE</span><b>首页 / 记录 / 架构</b></div><div class="case-stat"><span>TOOLS</span><b>Figma</b></div><div class="case-stat"><span>AI ROLE</span><b>Product Concept</b></div><div class="case-stat"><span>STAGE</span><b>Interactive Prototype</b></div></div>
          <div class="case-note">项目没有进入真实开发与用户测试；这里展示的是产品结构、交互原型与 AI 能力映射，而不是已上线的 AI 系统。</div>
        </div>
      </section>
      <section class="case-section">
        <p class="case-eyebrow">01 · PROBLEM FRAMING</p><h4>问题不只是“记录健康数据”，而是记录之后用户下一步该做什么</h4>
        <p>课程方案同时覆盖饮食、运动、身体状态、课程与社区。重新梳理后，我更关注其中一条核心链路：让记录不止停留在数据输入，而能继续进入理解与行动。</p>
        <div class="fitness-flow"><div><small>INPUT</small><b>Record</b><span>饮食 · 运动 · 身体状态</span></div><i>→</i><div><small>UNDERSTAND</small><b>Feedback</b><span>今日概览 · 趋势 · 状态</span></div><i>→</i><div><small>ACTION</small><b>Next Step</b><span>计划 · 课程 · AI 建议</span></div></div><figure class="case-image fitness-ia"><img class="case-thumb" src="assets/fitness/ia.png" data-full="assets/fitness/ia.png" alt="智体 App 信息架构图"><figcaption>TEAM INFORMATION ARCHITECTURE · MY SCOPE: HOME + TRACKING</figcaption></figure>
      </section>
      <section class="case-section">
        <p class="case-eyebrow">02 · COMPETITIVE ANALYSIS → DECISION</p><h4>竞品分析的价值不是列功能，而是找到不能照搬的优势和可以切入的空缺</h4>
        <div class="fitness-insights"><div><span>01</span><b>低门槛记录值得学习</b><p>饮食工具的价值来自快速输入、清晰反馈与贴近日常饮食的数据结构，而不是继续增加页面数量。</p></div><div><span>02</span><b>“功能多”不是差异化</b><p>综合健身平台已经拥有内容、社区与商业生态。学生项目无法复制积累，更需要明确核心使用链路。</p></div><div><span>03</span><b>数据展示之后仍缺一步</b><p>硬件健康平台可以汇总大量指标，但“这些数据意味着什么、我现在该做什么”仍是可以继续设计的体验层。</p></div></div>
      </section>
      <section class="case-section">
        <p class="case-eyebrow">03 · MY SCOPE / HOME & TRACKING</p><h4>把高频操作放在首页与记录链路，而不是让用户在复杂功能树里寻找入口</h4>
        <div class="case-grid-2"><div><p class="case-lead">我主要负责首页与记录板块、对应的信息架构，以及食卡卡竞品分析。</p><div class="constraint-list"><div class="constraint-row"><span class="raw">高频输入</span><span class="arrow">→</span><span class="mapped">缩短饮食 / 运动 / 状态记录路径</span></div><div class="constraint-row"><span class="raw">今日反馈</span><span class="arrow">→</span><span class="mapped">首页承担汇总，而不是只做功能入口</span></div><div class="constraint-row"><span class="raw">持续行动</span><span class="arrow">→</span><span class="mapped">让记录结果能继续连接计划与建议</span></div></div></div><figure class="case-image fitness-workspace-crop"><img class="case-thumb fitness-phone-shot" src="assets/fitness/tracking.png" data-full="assets/fitness/tracking.png" alt="智体记录页面原型"><figcaption>TRACKING PROTOTYPE / FOOD LOG</figcaption></figure></div>
      </section>
      <section class="case-section">
        <p class="case-eyebrow">04 · AI CAPABILITY MAPPING</p><h4>没有把“AI”当成一个独立按钮，而是尝试放进具体决策节点</h4>
        <div class="ai-mapping-grid"><div><small>SCENARIO</small><b>饮食输入成本高</b><span>概念方向：图像识别辅助记录中式餐饮与外卖。</span></div><div><small>SCENARIO</small><b>计划难以持续适配</b><span>概念方向：结合目标、习惯和反馈动态调整建议。</span></div><div><small>SCENARIO</small><b>用户知道问题但不知道做什么</b><span>概念方向：自然语言表达时间、状态与目标，再连接具体行动。</span></div></div>
        <div class="case-note">这些能力停留在产品概念与交互设计阶段，没有进行模型训练、识别准确率或 Agent 执行能力验证。因此作品集只讨论“AI 应该解决哪一步”，不把概念包装成已实现能力。</div>
      </section>
      <section class="case-section">
        <p class="case-eyebrow">05 · FIGMA PROTOTYPE</p><h4>从功能结构落到可点击页面，而不是停在概念描述</h4>
        <figure class="case-image fitness-full-workspace"><img class="case-thumb" src="assets/fitness/figma-overview.png" data-full="assets/fitness/figma-overview.png" alt="智体完整 Figma 工作区"><figcaption>TEAM FIGMA WORKSPACE · MY PRIMARY SCOPE: HOME + TRACKING</figcaption></figure>
        <p>团队继续扩展了计划、社区、商城等模块；我的主要设计范围保持在首页与记录体验。完整画布在这里作为产品规模与协作过程的视觉证据，而不是把所有页面都归为个人产出。</p>
      </section>
      <section class="case-section">
        <p class="case-eyebrow">06 · WHAT I WOULD CHANGE NOW</p><h4>如果重新做一次，我会先收缩 Scope，再验证 AI 是否真的降低了用户决策成本</h4>
        <div class="metric-grid"><div class="metric-card"><b>Record Completion</b><span>一次记录是否顺利完成 / 中途退出</span></div><div class="metric-card"><b>Time to Log</b><span>完成一次高频记录需要多久</span></div><div class="metric-card"><b>AI Suggestion Acceptance</b><span>建议被接受、修改或忽略的比例</span></div><div class="metric-card"><b>Next-action Rate</b><span>查看反馈后是否进入计划 / 课程 / 行动</span></div></div>
        <div class="case-note">这些是下一阶段的验证指标，不是当前项目已经获得的数据。第一轮 MVP 也不会同时做社区、商城、完整课程生态和复杂 AI 管家，而会优先验证“记录 → 理解 → 下一步行动”这条核心链路。</div>
      </section>
    `
  },

  mahjong: {
    kicker: "GAME SYSTEM · PROTOTYPE",
    title: "Sudoku Mahjong",
    subtitle: "Puzzle system combining two rule sets",
    body: `
      <p>尝试把数独的约束关系与麻将牌型组合成新的益智系统。</p>
      <h4>设计问题</h4>
      <ul>
        <li>两个规则系统如何互相产生决策空间？</li>
        <li>资源限制与换牌机制如何控制节奏？</li>
        <li>如何让复杂规则仍然可理解？</li>
      </ul>
      <h4>我的工作</h4>
      <p>负责核心规则、换牌机制、资源限制和原型设计，并探索从单人玩法继续扩展多人规则。</p>
    `
  }
};

const modal = document.getElementById("projectModal");
const modalKicker = document.getElementById("modalKicker");
const modalTitle = document.getElementById("modalTitle");
const modalSubtitle = document.getElementById("modalSubtitle");
const modalBody = document.getElementById("modalBody");

function openProject(key) {
  const project = projectData[key];
  if (!project) return;

  modalKicker.textContent = project.kicker;
  modalTitle.textContent = project.title;
  modalSubtitle.textContent = project.subtitle;
  modalBody.innerHTML = project.body;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  if (key === "cat") requestAnimationFrame(initCatDemo);
}

function closeProject() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.querySelectorAll("[data-project]").forEach(button => {
  button.addEventListener("click", () => openProject(button.dataset.project));
});

document.querySelectorAll("[data-close]").forEach(element => {
  element.addEventListener("click", closeProject);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("open")) {
    closeProject();
  }
});

const revealTargets = document.querySelectorAll(
  ".project-card, .process-step, .about, .explore-card, .contact"
);

revealTargets.forEach(element => element.classList.add("reveal"));

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
);

revealTargets.forEach(element => observer.observe(element));

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", event => {
    const selector = anchor.getAttribute("href");
    const target = document.querySelector(selector);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Image lightbox for case-study evidence. Uses event delegation so it also works
// for images injected later into the project modal.
let activeLightbox = null;

function closeLightbox() {
  if (!activeLightbox) return;
  activeLightbox.remove();
  activeLightbox = null;
  document.body.classList.remove("lightbox-open");
}

function openLightbox(img) {
  closeLightbox();
  const src = img.dataset.full || img.currentSrc || img.src;
  const overlay = document.createElement("div");
  overlay.className = "image-lightbox";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");

  const closeButton = document.createElement("button");
  closeButton.className = "lightbox-close";
  closeButton.type = "button";
  closeButton.setAttribute("aria-label", "关闭原图");
  closeButton.textContent = "×";

  const fullImage = document.createElement("img");
  fullImage.src = src;
  fullImage.alt = img.alt || "项目原图";

  const hint = document.createElement("div");
  hint.className = "lightbox-hint";
  hint.textContent = "Click outside or press ESC to close";

  overlay.append(closeButton, fullImage, hint);
  document.body.appendChild(overlay);
  document.body.classList.add("lightbox-open");
  activeLightbox = overlay;

  closeButton.addEventListener("click", closeLightbox);
  overlay.addEventListener("click", event => {
    if (event.target === overlay) closeLightbox();
  });
}

document.addEventListener("click", event => {
  const img = event.target.closest("img.case-thumb");
  if (!img) return;
  event.preventDefault();
  event.stopPropagation();
  openLightbox(img);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && activeLightbox) closeLightbox();
});


// ===== V3.3 defensive lightbox binding =====
(function () {
  function ensureImageLightbox() {
    let box = document.getElementById("imageLightboxV33");
    if (box) return box;

    box = document.createElement("div");
    box.id = "imageLightboxV33";
    box.style.cssText = [
      "position:fixed","inset:0","display:none","align-items:center","justify-content:center",
      "background:rgba(13,13,13,.92)","z-index:5000","padding:24px","cursor:zoom-out"
    ].join(";");

    const img = document.createElement("img");
    img.alt = "Full image preview";
    img.style.cssText = [
      "max-width:96vw","max-height:92vh","width:auto","height:auto","object-fit:contain",
      "image-rendering:auto","box-shadow:0 24px 80px rgba(0,0,0,.35)"
    ].join(";");
    box.appendChild(img);

    const close = document.createElement("button");
    close.textContent = "×";
    close.setAttribute("aria-label", "关闭图片");
    close.style.cssText = [
      "position:absolute","right:22px","top:18px","width:44px","height:44px",
      "border-radius:50%","border:1px solid rgba(255,255,255,.28)",
      "background:rgba(0,0,0,.35)","color:#fff","font-size:28px","cursor:pointer"
    ].join(";");
    box.appendChild(close);

    function hide() {
      box.style.display = "none";
      img.removeAttribute("src");
    }

    box.addEventListener("click", hide);
    img.addEventListener("click", e => e.stopPropagation());
    close.addEventListener("click", e => { e.stopPropagation(); hide(); });
    document.addEventListener("keydown", e => {
      if (e.key === "Escape" && box.style.display === "flex") hide();
    });

    document.body.appendChild(box);
    return box;
  }

  document.addEventListener("click", function (event) {
    const target = event.target.closest("img[data-full]");
    if (!target) return;
    event.preventDefault();
    event.stopPropagation();

    const box = ensureImageLightbox();
    const img = box.querySelector("img");
    img.src = target.dataset.full || target.src;
    img.style.imageRendering = target.classList.contains("pixel-art") || target.classList.contains("xuhui-cover")
      ? "pixelated"
      : "auto";
    box.style.display = "flex";
  });
})();

// ===== V3.5 CatYarnOverlay interactive web recreation =====
let catDemoCleanup = null;
function initCatDemo(){
  if(catDemoCleanup){catDemoCleanup();catDemoCleanup=null;}
  const canvas=document.getElementById('catDemoCanvas'); if(!canvas)return;
  const ctx=canvas.getContext('2d'), clearBtn=document.getElementById('catDemoClear');
  let raf=0, catX=450,catY=250,targetX=450,targetY=250,prevX=450,prevY=250,isDown=false,pressStart=0,lastPoint=null,lastStamp=null,hue=200,lastTrailAt=0;
  const yarnSegments=[],yarnBalls=[],trails=[],particles=[];
  const localPoint=e=>{const r=canvas.getBoundingClientRect();return{x:(e.clientX-r.left)*canvas.width/r.width,y:(e.clientY-r.top)*canvas.height/r.height};};
  const reset=()=>{yarnSegments.length=yarnBalls.length=trails.length=particles.length=0;lastPoint=lastStamp=null;};
  const move=e=>{const p=localPoint(e);targetX=p.x;targetY=p.y;};
  const down=e=>{move(e);isDown=true;pressStart=performance.now();canvas.setPointerCapture?.(e.pointerId);};
  const up=()=>{if(!isDown)return;isDown=false;const held=Math.min((performance.now()-pressStart)/10000,1),count=12+Math.floor(held*28);for(let i=0;i<count;i++){const a=Math.random()*Math.PI*2,s=1.5+Math.random()*(3+held*8);particles.push({x:catX,y:catY,vx:Math.cos(a)*s,vy:Math.sin(a)*s,life:1,size:4+Math.random()*(8+held*18),h:(hue+Math.random()*80)%360});}};
  const key=e=>{if((e.key==='c'||e.key==='C')&&document.getElementById('projectModal')?.classList.contains('open'))reset();};
  canvas.addEventListener('pointermove',move);canvas.addEventListener('pointerdown',down);canvas.addEventListener('pointerup',up);canvas.addEventListener('pointercancel',up);window.addEventListener('keydown',key);clearBtn?.addEventListener('click',reset);
  function yarn(x,y,r,h,a=1){ctx.save();ctx.globalAlpha=a;ctx.fillStyle=`hsl(${h} 78% 61%)`;ctx.strokeStyle=`hsl(${h} 80% 42%)`;ctx.lineWidth=2;ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fill();ctx.stroke();ctx.strokeStyle='rgba(255,255,255,.78)';ctx.lineWidth=1.5;for(let k=-1;k<=1;k++){ctx.beginPath();ctx.arc(x+k*r*.08,y,r*.68,-1.25,1.3);ctx.stroke();}ctx.restore();}
  function cat(x,y,size,h,a=1,scale=1){ctx.save();ctx.translate(x,y);ctx.scale(scale,scale);ctx.globalAlpha=a;ctx.fillStyle=`hsl(${h} 63% 60%)`;ctx.strokeStyle='rgba(33,35,48,.72)';ctx.lineWidth=3;ctx.beginPath();ctx.ellipse(0,16,size*.46,size*.36,0,0,Math.PI*2);ctx.fill();ctx.stroke();ctx.beginPath();ctx.arc(size*.38,6,size*.34,-1.2,1.5);ctx.stroke();ctx.beginPath();ctx.moveTo(-size*.28,-size*.13);ctx.lineTo(-size*.18,-size*.43);ctx.lineTo(-size*.04,-size*.22);ctx.closePath();ctx.moveTo(size*.05,-size*.22);ctx.lineTo(size*.19,-size*.43);ctx.lineTo(size*.28,-size*.12);ctx.closePath();ctx.fill();ctx.stroke();ctx.fillStyle='#13151c';ctx.beginPath();ctx.arc(-size*.13,-size*.05,size*.035,0,Math.PI*2);ctx.arc(size*.13,-size*.05,size*.035,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#13151c';ctx.lineWidth=2;ctx.beginPath();ctx.arc(0,size*.015,size*.08,.15,Math.PI-.15);ctx.stroke();[-1,1].forEach(s=>{ctx.beginPath();ctx.moveTo(s*size*.08,size*.03);ctx.lineTo(s*size*.32,-size*.005);ctx.stroke();ctx.beginPath();ctx.moveTo(s*size*.08,size*.055);ctx.lineTo(s*size*.34,size*.08);ctx.stroke();});ctx.restore();}
  function frame(t){raf=requestAnimationFrame(frame);ctx.fillStyle='#f5f4f8';ctx.fillRect(0,0,canvas.width,canvas.height);prevX=catX;prevY=catY;catX+=(targetX-catX)*.10;catY+=(targetY-catY)*.10;const speed=Math.hypot(catX-prevX,catY-prevY);hue=(hue+speed*.15)%360;const held=isDown?Math.min((t-pressStart)/10000,1):0,ballR=14+held*48,yx=catX+42,yy=catY+25;if(!lastPoint||Math.hypot(yx-lastPoint.x,yy-lastPoint.y)>2){if(lastPoint)yarnSegments.push({x1:lastPoint.x,y1:lastPoint.y,x2:yx,y2:yy,h:hue});lastPoint={x:yx,y:yy};}if(isDown&&(!lastStamp||Math.hypot(yx-lastStamp.x,yy-lastStamp.y)>Math.max(18,ballR*.8))){yarnBalls.push({x:yx,y:yy,r:ballR,h:hue});lastStamp={x:yx,y:yy};}if(t-lastTrailAt>80&&speed>2.4){trails.push({x:catX,y:catY,h:hue,life:1});lastTrailAt=t;}ctx.lineCap='round';ctx.lineJoin='round';for(const s of yarnSegments){ctx.strokeStyle=`hsla(${s.h} 78% 52% / .68)`;ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(s.x1,s.y1);ctx.quadraticCurveTo((s.x1+s.x2)/2,(s.y1+s.y2)/2+5,s.x2,s.y2);ctx.stroke();}for(const b of yarnBalls)yarn(b.x,b.y,b.r,b.h,.78);for(let i=trails.length-1;i>=0;i--){const q=trails[i];q.life-=.022;if(q.life<=0){trails.splice(i,1);continue;}cat(q.x,q.y,92,q.h,q.life*.28,.96);}for(let i=particles.length-1;i>=0;i--){const p=particles[i];p.x+=p.vx;p.y+=p.vy;p.vy+=.08;p.vx*=.992;p.life-=.018;if(p.life<=0){particles.splice(i,1);continue;}yarn(p.x,p.y,p.size,p.h,p.life*.85);}cat(catX,catY,110,hue,1,1+held*.035);yarn(yx,yy,ballR,hue,1);if(isDown){ctx.fillStyle='rgba(18,18,24,.10)';ctx.fillRect(24,24,180,8);ctx.fillStyle='#1a1a1f';ctx.fillRect(24,24,180*held,8);ctx.font='11px ui-monospace,monospace';ctx.fillStyle='#2a2a30';ctx.fillText(`HOLD ${(held*10).toFixed(1)} / 10.0 s`,24,52);}}
  raf=requestAnimationFrame(frame);
  catDemoCleanup=()=>{cancelAnimationFrame(raf);canvas.removeEventListener('pointermove',move);canvas.removeEventListener('pointerdown',down);canvas.removeEventListener('pointerup',up);canvas.removeEventListener('pointercancel',up);window.removeEventListener('keydown',key);clearBtn?.removeEventListener('click',reset);};
}
