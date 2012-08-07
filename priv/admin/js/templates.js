Ember.TEMPLATES['application'] = Ember.Handlebars.compile('<div id="header">    <a id="riak-control-logo"></a>    <a id="basho-logo" href="http://www.basho.com" target="_blank"></a></div><div id="wrapper" class="split gui-text">    <table>        <tr>            <td id="nav-box">                <div id="navigation">                    <ul id="nav-ul">                        <li id="nav-snapshot" class="nav-li"><a {{action showSnapshot href=true}} class="gui-text-bold nav-item">Snapshot</a></li>                        <li id="nav-cluster" class="nav-li"><a {{action showCluster href=true}} class="gui-text-bold nav-item">Cluster</a></li>                        <li id="nav-ring" class="nav-li"><a {{action showRing href=true}} class="gui-text-bold nav-item">Ring</a></li>                        <li id="nav-mapreduce" class="nav-li"><a {{action showMapReduce href=true}} class="gui-text-bold nav-item">MapReduce</a></li>                        <li id="nav-objects" class="nav-li-disabled"><a class="gui-text-bold nav-item">Objects</a></li>                        <li id="nav-graphs" class="nav-li-disabled"><a class="gui-text-bold nav-item">Graphs</a></li>                        <li id="nav-logs" class="nav-li-disabled"><a class="gui-text-bold nav-item">Logs</a></li>                        <li id="nav-support" class="nav-li-disabled"><a class="gui-text-bold nav-item">Support</a></li>                    </ul>                    <div id="active-nav"></div>                </div>                <div id="split-bar"></div>            </td>            <td id="content-well">{{ outlet }}</td>        </tr>    </table></div><!-- #wrapper --><div id="tooltips" class="hide">    <div id="inner-tooltips">        <table><tr>            <td id="display-tips" class="gui-text"></td>        </tr></table>    </div></div>');
Ember.TEMPLATES['snapshot'] = Ember.Handlebars.compile('<h1 id="snapshot-headline" class="gui-headline-bold">Current Snapshot...</h1><div class="relative">    <div id="healthy-cluster" class="hide">        <h2 class="gui-headline-bold has-cut">Your cluster is healthy.</h2>        <h3 class="gui-headline vertical-padding-small">You currently have...</h3>        <ul class="gui-text bulleted">            <li><span class="emphasize monospace">0</span> Unreachable nodes</li>            <li><span class="emphasize monospace">0</span> Incompatible nodes</li>            <li><span class="emphasize monospace">0</span> Nodes marked as down</li>            <li><span class="emphasize monospace">0</span> Nodes experiencing low memory</li>            <li>Nothing to worry about because Riak is your friend</li>        </ul>    </div>    <div id="unhealthy-cluster" class="hide">        <h2 class="gui-headline-bold has-cut">Your cluster has problems.</h2>        <!-- Unreachable Nodes List -->        <h3 id="unreachable-nodes-title" class="gui-headline vertical-padding-small hide">The following nodes are currently unreachable:</h3>        <ul id="unreachable-nodes-list" class="gui-text bulleted hide monospace"></ul>        <!-- Incompatible Nodes List -->        <h3 id="incompatible-nodes-title" class="gui-headline vertical-padding-small hide">The following nodes are currently incompatible with Riak Control:</h3>        <ul id="incompatible-nodes-list" class="gui-text bulleted hide monospace"></ul>        <!-- Down Nodes List -->        <h3 id="down-nodes-title" class="gui-headline vertical-padding-small hide">The following nodes are currently marked down:</h3>        <ul id="down-nodes-list" class="gui-text bulleted hide monospace"></ul>        <!-- Low-Mem Nodes List -->        <h3 id="low_mem-nodes-title" class="gui-headline vertical-padding-small hide">The following nodes are currently experiencing low memory:</h3>        <ul id="low_mem-nodes-list" class="gui-text bulleted hide monospace"></ul>    </div></div><script id="#snapshot-script" src="/admin/ui/js/snapshot.js"></script><script type="text/javascript">  alert("hi");</script>');
Ember.TEMPLATES['cluster'] = Ember.Handlebars.compile('<h1 id="cluster-headline" class="gui-headline-bold">Cluster View</h1><div id="add-node">    <h3 class="gui-headline">Add Nodes to the Cluster...</h3>    <table>        <tr>            <td id="add-node-box">                <div class="gui-field gui-text">                    <div class="gui-field-bg">                        <input id="node-to-add" class="gui-field-input gui-text" type="text" name="nodeName" />                    </div>                    <div class="gui-field-cap-left"></div>                    <div class="gui-field-cap-right"></div>                </div>            </td>            <td class="button-column">                <a id="add-node-button" class="gui-point-button gui-text-bold right">                    <span class="gui-button-msg">Add Node</span>                </a>            </td>        </tr>    </table>    <div id="node-error" class="hide">        <a class="close-error gui-text"></a>        <a class="error-text offline"></a>        <a class="error-link gui-text underline" href="#"></a>    </div></div><!-- #add-node --><h2 class="gui-headline-bold has-cut">    Node List    <span id="total-number" class="gui-text"></span></h2><div id="node-list" class="hide">    <table class="list-table" id="cluster-table">        <tr class="table-head has-cut">            <td><h3 class="gui-headline">Status</h3></td>            <td><h3 class="gui-headline">Name</h3></td>            <td><h3 class="gui-headline">Actions</h3></td>            <td><h3 class="gui-headline">Partitions</h3></td>            <td><h3 class="gui-headline">Memory Usage</h3></td>        </tr>    </table></div><div class="spinner-box"><img id="cluster-spinner" class="spinner" src="/admin/ui/images/spinner.gif"></div><!-- node template --><table class="hide">    <tr class="node row-template">        <td class="status-box gui-text">            <a class="gui-light status-light"><span class="status">Joining...</span></a>        </td>        <td class="name-box gui-text">            <div class="gui-field gui-text">                <div class="gui-field-bg">                    <div class="name gui-field-input"></div>                </div>                <div class="gui-field-cap-left"></div>                <div class="gui-field-cap-right"></div>            </div>        </td>        <td class="more-actions-slider-box gui-text">            <div class="gui-slider gui-text">                <div class="gui-slider-activate"></div>                <div class="gui-slider-groove">                    <div class="gui-slider-msg isLeft">View Actions</div>                    <div class="gui-slider-msg isRight">Hide Actions</div>                </div>            </div>            <div class="gui-slider-leaving hide"></div>        </td>        <td class="gui-text ring_pct-box">            <div class="left pct-arrows pct-static">                <div class="green-pct-arrow"></div>            </div>            <div class="left gui-field gui-text pct-box">                <div class="gui-field-bg">                    <div class="i-block ring_pct gui-field-input"></div>                    <!--                    <span class="monospace gray-text">:</span>                    <div class="i-block pending_pct gui-field-input"></div>                    -->                </div>                <div class="gui-field-cap-left"></div>                <div class="gui-field-cap-right"></div>            </div>            <div class="clear"></div>        </td>        <td class="gui-text memory-box">            <div class="left membar-bg">                <div class="erlang-mem mem-color left" name=""></div>                <div class="non-erlang-mem mem-color left" name=""></div>                <div class="unknown-mem"></div>                <div class="membar-fg"></div>            </div>            <span class="free-memory left"></span>        </td>    </tr>    <tr class="more-node-actions more-actions-template">        <td>&nbsp;</td>        <td colspan="4" class="more-actions-td">            <div class="actions-pointer hide"></div>            <div class="actions-box gui-text hide">                <div class="shutdown-box left">                    <a class="shutdown-button left"></a>                    <span class="shutdown-label gui-text block left">Stop Node</span>                    <div class="clear"></div>                </div>                <div class="leave-cluster-box left">                    <a class="leave-cluster-button left"></a>                    <span class="leave-cluster-label gui-text block left">Leave Cluster</span>                    <div class="clear"></div>                </div>                <div class="markdown-box left">                    <a class="markdown-button left pressed disabled"></a>                    <span class="markdown-label gui-text block left disabled">Mark Down</span>                    <div class="clear"></div>                </div>                <div class="clear"></div>            </div>            <div class="clear"></div>        </td>    </tr></table><!-- end node template -->');
Ember.TEMPLATES['ring'] = Ember.Handlebars.compile('<div id="ring-filter" class="right">    <!-- Will potentially implement something like this after we get some feedback on how users would like to use the filter.    <div class="gui-checkbox-wrapper">        <input id="primary-nodes" class="gui-checkbox" type="checkbox" name="ringfilter" checked="checked" />        <span class="gui-text">Primary&nbsp;&nbsp;&nbsp;</span>    </div>    <div class="gui-checkbox-wrapper">        <input id="fallback-nodes" class="gui-checkbox" type="checkbox" name="ringfilter" checked="checked" />        <span class="gui-text">Fallback&nbsp;&nbsp;&nbsp;</span>    </div>    -->    <!--    <div class="gui-checkbox-wrapper">        <input id="handoff-nodes" class="gui-checkbox" type="checkbox" name="ringfilter" checked="checked" />        <span class="gui-text">Handoff&nbsp;&nbsp;&nbsp;</span>    </div>    -->    <h4 class="gui-headline">Filter</h4>    <div class="gui-dropdown-wrapper">        <div class="gui-dropdown-bg gui-text smaller"></div>        <div class="gui-dropdown-cap left"></div>        <select id="filter" class="gui-dropdown">            <option value="/admin/ring/partitions">All</option>        </select>    </div></div><h1 id="ring-headline" class="gui-headline-bold">    Ring View    <span id="total-number" class="gui-text"></span></h1><ul class="pagination gui-text">    <!-- The end result will look like this:    <li name="prev"><span class="paginator">Prev</span></li>    <li name="1"><span class="paginator pageNumber active">1</span></li>    <li name="2"><span class="paginator pageNumber">2</span></li>    <li name="3"><span class="paginator pageNumber">3</span></li>    <li name="next"><span class="paginator">Next</span></li>    --></ul><div class="cut"></div><div id="partition-list" class="hide has-cut">    <table class="list-table" id="ring-table">        <thead>        <tr class="table-head has-cut">            <td><h3 class="gui-headline">#</h3></td>            <td><h3 class="gui-headline">Owner Node</h3></td>            <td><h3 class="gui-headline">KV</h3></td>            <td><h3 class="gui-headline">Pipe</h3></td>            <td><h3 class="gui-headline">Search</h3></td>        </tr>        <tr id="no-matches" class="hide">            <td colspan="5" class="gui-text">No partitions matched your filter.</td>        </tr>        <tr class="spinner-box">            <td colspan="5"><img id="ring-spinner" class="spinner" src="/admin/ui/images/spinner.gif"></td>        </tr>        </thead>        <tbody id="ring-table-body">                </tbody>    </table></div><ul class="pagination gui-text pagination-bottom"></ul><!-- partition template --><table class="hide">    <tr class="partition partition-template">        <td class="partition-number gui-text"></td>        <td class="owner-box gui-text">            <div class="gui-field gui-text">                <div class="gui-field-bg">                    <div class="owner gui-field-input"></div>                    <div class="partition-index hide"></div>                </div>                <div class="gui-field-cap-left"></div>                <div class="gui-field-cap-right"></div>            </div>        </td>        <td class="kv-box gui-text">            <a class="gui-light kv-light gray">                <span class="kv-status">Disabled</span>                <span class="hide fallback-to"></span>            </a>        </td>        <td class="pipe-box gui-text">            <a class="gui-light pipe-light gray">                <span class="pipe-status">Disabled</span>                <span class="hide fallback-to"></span>            </a>        </td>        <td class="search-box gui-text">            <a class="gui-light search-light gray">                <span class="search-status">Disabled</span>                <span class="hide fallback-to"></span>            </a>        </td>    </tr></table><!-- end partition template -->');
Ember.TEMPLATES['mapreduce'] = Ember.Handlebars.compile('MapReduce.');
