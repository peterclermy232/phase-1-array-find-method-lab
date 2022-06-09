// code your solution here

superbowlwin = (record) => {
    const result = record.find( record => record.result === "W" );
    return !!result ? result.year : undefined;
}
