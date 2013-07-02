
function assertWidget(actualWidget, expected) {
    ok(actualWidget, "Widget is not null");
    equal(actualWidget.id(), expected.id, "DOM ID");
    deepEqual(actualWidget.options(), expected.options, "Options");
    equal(actualWidget.dom(), expected.dom, "DOM object");
}