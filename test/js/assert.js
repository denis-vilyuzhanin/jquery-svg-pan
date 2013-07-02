
function assertWidget(actualWidget, expected) {
    ok(actualWidget, "Widget is not null");
    equal(actualWidget.getId(), expected.id, "DOM ID");
    deepEqual(actualWidget.options, expected.options, "Options");
    equal(actualWidget.getDOM(), expected.dom, "DOM object");
}