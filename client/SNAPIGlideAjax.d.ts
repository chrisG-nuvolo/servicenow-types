declare class SNAPIGlideAjax {
    constructor(class_name: string);
    /**
     * Specifies a parameter name and value to be passed to the server-side function associated
     * with this <span class="keyword apiname">GlideAjax</span> object.
     * @param parm_name The name of the parameter to pass. (The name must begin with the
     * <samp class="ph codeph">sysparm_</samp> .)
     * @param parm_value The value to assign to <span class="keyword parmname">parm_name</span>.
    */
    addParam(parm_name: string, parm_value: string): void;
    /**
     * Retrieves the results from a server-side method called from the client via
     * <span class="keyword apiname">getXMLWait()</span>.
    */
    getAnswer(): void;
    /**
     * Sends the server a request to execute the method and parameters associated with this
     * <span class="keyword apiname">GlideAjax</span> object.
     * @param callback The name of the callback function to process the results returned by the server.
    */
    getXML(callback: any): void;
    /**
     * Call the processor asynchronously and get the answer element of the response in XML
     * format.
     * @param callback The callback function. The function receives the answer element of the response
     * in XML format as an argument.
    */
    getXMLAnswer(callback: any): void;
    /**
     * Sends the server a request to execute the method and parameters associated with this
     * <span class="keyword apiname">GlideAjax</span> object.
    */
    getXMLWait(): void;
}
export { SNAPIGlideAjax };