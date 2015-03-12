(function () {

    "use strict";

    /**
     A **Task** represents an asynchronously-running process within a {{#crossLink "Tasks"}}Tasks{{/crossLink}}.

     <img src="http://www.gliffy.com/go/publish/image/7123427/L.png"></img>

     @class Task
     @module XEO
     @extends Component
     */
    XEO.Task = XEO.Component.extend({

        _init: function (cfg) {

            this.id = cfg.id;

            this.description = cfg.description || "";

            this.failed = false;

            this.completed = false;
        },

        /**
         * Sets this task as successfully completed.
         *
         * Fires a  {{#crossLink "Task/completed:event"}}{{/crossLink}} event on this task, as well as
         * a {{#crossLink "Tasks/completed:event"}}{{/crossLink}} event on the parent  {{#crossLink "Tasks"}}Task{{/crossLink}}.
         *
         * @method setCompleted
         */
        setCompleted: function () {

            /**
             * Fired when this task has successfully completed.
             * @event completed
             */
            this.fire("completed", this.completed = true);
        },

        /**
         * Sets this task as failed.
         *
         * Fires a  {{#crossLink "Task/failed:event"}}{{/crossLink}} event on this task, as well as
         * a {{#crossLink "Tasks/failed:event"}}{{/crossLink}} event on the parent  {{#crossLink "Tasks"}}Tasks{{/crossLink}}.
         *
         * @method setFailed
         */
        setFailed: function () {

            /**
             * Fired when this task has failed
             * @event failed
             */
            this.fire("failed", this.failed = true);
        },

        _destroy: function () {
            if (!this.completed && this.destroyed) {
                this.setCompleted();
            }
        }
    });

})();